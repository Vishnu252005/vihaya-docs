"use client";

/**
 * "Copy for AI" — takes the page you are reading and puts it on the clipboard
 * as clean Markdown, ready to paste into a coding agent.
 *
 * ⚠️ IT READS THE RENDERED DOM, NOT A SECOND COPY OF THE PAGE. Every other way
 * of doing this (a parallel .md file, a CMS field) is a second source that goes
 * stale the first time someone edits the page and forgets. Walking the article
 * element means the copy is, by construction, the page.
 *
 * The dropdown also offers the whole-API bundle, because a reader on one page
 * usually wants the API context and not just the prose they are looking at.
 */

import { useState, useRef, useEffect } from 'react';
import { Check, Copy, ChevronDown, FileText, Sparkles, ExternalLink } from 'lucide-react';

/** Block-level tags that should end a line when flattening the DOM. */
const BLOCK = new Set([
    'P', 'DIV', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER', 'UL', 'OL', 'TABLE',
    'TR', 'BLOCKQUOTE', 'PRE', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
]);

function nodeToMarkdown(node: Node, out: string[]) {
    if (node.nodeType === Node.TEXT_NODE) {
        const t = node.textContent ?? '';
        if (t.trim()) out.push(t.replace(/\s+/g, ' '));
        return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const el = node as HTMLElement;
    // Anything explicitly marked as chrome, plus things that carry no meaning
    // once the styling is gone.
    if (el.dataset.noCopy !== undefined) return;
    if (el.getAttribute('aria-hidden') === 'true') return;
    if (['SCRIPT', 'STYLE', 'NAV', 'BUTTON', 'SVG'].includes(el.tagName)) return;

    switch (el.tagName) {
        case 'H1': out.push(`\n\n# ${el.textContent?.trim()}\n`); return;
        case 'H2': out.push(`\n\n## ${el.textContent?.trim()}\n`); return;
        case 'H3': out.push(`\n\n### ${el.textContent?.trim()}\n`); return;
        case 'H4': out.push(`\n\n#### ${el.textContent?.trim()}\n`); return;
        case 'PRE': {
            const code = el.textContent ?? '';
            out.push(`\n\n\`\`\`\n${code.replace(/\n+$/, '')}\n\`\`\`\n`);
            return;
        }
        case 'CODE':
            // Inline only — a <code> inside <pre> was already handled above.
            out.push(`\`${el.textContent}\``);
            return;
        case 'LI': {
            const inner: string[] = [];
            el.childNodes.forEach(c => nodeToMarkdown(c, inner));
            out.push(`\n- ${inner.join('').trim()}`);
            return;
        }
        case 'IMG': {
            const alt = (el as HTMLImageElement).alt;
            if (alt) out.push(`\n\n![${alt}]\n`);
            return;
        }
        case 'A': {
            const href = (el as HTMLAnchorElement).href;
            const text = el.textContent?.trim();
            if (!text) return;
            out.push(href && !href.startsWith('javascript') ? `[${text}](${href})` : text);
            return;
        }
        case 'STRONG':
        case 'B':
            out.push(`**${el.textContent?.trim()}**`);
            return;
    }

    el.childNodes.forEach(c => nodeToMarkdown(c, out));
    if (BLOCK.has(el.tagName)) out.push('\n');
}

function pageAsMarkdown(): string {
    const root = document.querySelector('[data-docs-content]') ?? document.querySelector('main');
    if (!root) return '';
    const out: string[] = [];
    root.childNodes.forEach(c => nodeToMarkdown(c, out));
    return out
        .join('')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

type Mode = 'page' | 'api';

/**
 * ⚠️ SAME-ORIGIN, NOT THE CANONICAL URL. Fetching the absolute
 * https://docs.vihaya.app/llms-full.txt meant the button 404'd everywhere the
 * site was not yet deployed — local dev and every preview build — and would be a
 * cross-origin request even in production. The absolute form is still what we
 * SHOW, because that is the URL someone pastes to an agent.
 */
const LLMS_FULL_PATH = '/llms-full.txt';

export function CopyForAI({ llmsFullUrl }: { llmsFullUrl: string }) {
    const [copied, setCopied] = useState<Mode | null>(null);
    const [open, setOpen] = useState(false);
    const [busy, setBusy] = useState(false);
    const [failed, setFailed] = useState(false);
    const wrap = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const onDown = (e: MouseEvent) => {
            if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('mousedown', onDown);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const flash = (m: Mode) => {
        setCopied(m);
        setOpen(false);
        setTimeout(() => setCopied(null), 2000);
    };

    const copyPage = async () => {
        const md = `${pageAsMarkdown()}\n\n---\nSource: ${window.location.href}\n`;
        await navigator.clipboard.writeText(md);
        flash('page');
    };

    const copyApi = async () => {
        setBusy(true);
        setFailed(false);
        try {
            // The bundle is generated from the live spec, so it is fetched rather
            // than bundled into this component.
            const r = await fetch(LLMS_FULL_PATH);
            if (!r.ok) throw new Error(`llms-full.txt returned ${r.status}`);
            await navigator.clipboard.writeText(await r.text());
            flash('api');
        } catch {
            // Say so rather than leaving a button that appears to do nothing.
            setFailed(true);
        } finally {
            setBusy(false);
        }
    };

    return (
        <div ref={wrap} className="relative inline-flex" data-no-copy>
            <button
                onClick={copyPage}
                className="inline-flex h-8 items-center gap-1.5 rounded-l-lg border border-r-0 bg-card px-2.5 text-[12px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Copy this page as Markdown"
            >
                {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy for AI'}</span>
            </button>
            <button
                onClick={() => setOpen(v => !v)}
                aria-label="More copy options"
                aria-expanded={open}
                className="inline-flex h-8 items-center rounded-r-lg border bg-card px-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute right-0 top-9 z-50 w-72 overflow-hidden rounded-xl border bg-popover shadow-lg">
                    <button onClick={copyPage} className="flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition-colors hover:bg-muted">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>
                            <span className="block text-[13px] font-medium">Copy this page</span>
                            <span className="block text-[11.5px] leading-snug text-muted-foreground">As Markdown, for pasting into a chat.</span>
                        </span>
                    </button>
                    <button onClick={copyApi} disabled={busy} className="flex w-full items-start gap-2.5 border-t px-3 py-2.5 text-left transition-colors hover:bg-muted disabled:opacity-60">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>
                            <span className="block text-[13px] font-medium">{busy ? 'Fetching…' : 'Copy the whole API context'}</span>
                            <span className={`block text-[11.5px] leading-snug ${failed ? 'text-destructive' : 'text-muted-foreground'}`}>
                                {failed
                                    ? 'Could not fetch it — open the file instead.'
                                    : 'Every endpoint, field and gotcha. Built from the live spec.'}
                            </span>
                        </span>
                    </button>
                    <a href={LLMS_FULL_PATH} target="_blank" rel="noopener noreferrer" title={llmsFullUrl} className="flex w-full items-start gap-2.5 border-t px-3 py-2.5 text-left transition-colors hover:bg-muted">
                        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>
                            <span className="block text-[13px] font-medium">Open llms-full.txt</span>
                            <span className="block text-[11.5px] leading-snug text-muted-foreground">Give this URL to an agent that can fetch.</span>
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
}
