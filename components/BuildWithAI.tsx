"use client";

/**
 * The interactive pieces of /docs/build-with-ai.
 *
 * ⚠️ THE PAGE ITSELF IS A SERVER COMPONENT AND THE PROSE LIVES THERE. Only the
 * bits that need a click — copy buttons, the file switcher — are in here, so
 * the brief and the endpoint list are still in the SSR HTML for anyone (and any
 * crawler, and any agent) reading without JavaScript.
 */

import { useState } from 'react';
import { Check, Copy, Terminal, FileCode2 } from 'lucide-react';
import type { StarterFile } from '@/lib/starter-kit';

function useCopy() {
    const [copied, setCopied] = useState(false);
    return {
        copied,
        copy: async (text: string) => {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        },
    };
}

/** A code block with a copy button. Dark in both themes, like the rest of the docs. */
export function CopyBlock({
    children, filename, maxHeight = 'none',
}: { children: string; filename?: string; maxHeight?: string }) {
    const { copied, copy } = useCopy();
    return (
        <div className="not-prose my-4 overflow-hidden rounded-xl border bg-[#0b0f14]" data-no-copy>
            <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
                <div className="flex min-w-0 items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 shrink-0 text-white/40" />
                    <span className="truncate font-mono text-[11px] text-white/60">{filename ?? 'prompt'}</span>
                </div>
                <button
                    onClick={() => copy(children)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                    {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <pre className="overflow-auto px-4 py-3.5" style={{ maxHeight }}>
                <code className="whitespace-pre font-mono text-[12.5px] leading-relaxed text-[#d7dde5]">{children}</code>
            </pre>
        </div>
    );
}

/** The big one: the brief a team pastes into their agent. */
export function PromptCard({ prompt }: { prompt: string }) {
    const { copied, copy } = useCopy();
    return (
        <div className="not-prose my-6 overflow-hidden rounded-2xl border border-primary/30 bg-primary/[0.05]" data-no-copy>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary/20 px-4 py-3">
                <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-primary">The brief</p>
                    <p className="text-[12px] text-muted-foreground">Paste this into Claude Code, Cursor, or any coding agent.</p>
                </div>
                <button
                    onClick={() => copy(prompt)}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[12.5px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy brief'}
                </button>
            </div>
            <pre className="max-h-80 overflow-auto bg-[#0b0f14] px-4 py-3.5">
                <code className="whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-[#d7dde5]">{prompt}</code>
            </pre>
        </div>
    );
}

/** File switcher for the starter kit. */
export function StarterBrowser({ files }: { files: StarterFile[] }) {
    const [active, setActive] = useState(0);
    const file = files[active];

    return (
        <div className="not-prose my-6 overflow-hidden rounded-2xl border bg-card" data-no-copy>
            <div className="flex gap-1 overflow-x-auto border-b bg-muted/40 p-2">
                {files.map((f, i) => (
                    <button
                        key={f.path}
                        onClick={() => setActive(i)}
                        className={`shrink-0 rounded-lg px-2.5 py-1.5 font-mono text-[11.5px] transition-colors ${
                            i === active
                                ? 'bg-background font-semibold text-foreground shadow-sm'
                                : 'text-muted-foreground hover:bg-background/60 hover:text-foreground'
                        }`}
                    >
                        {f.path.split('/').pop()}
                    </button>
                ))}
            </div>

            <div className="flex items-start gap-2 border-b bg-muted/20 px-4 py-2.5">
                <FileCode2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                    <p className="font-mono text-[11.5px] text-foreground">{file.path}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">{file.note}</p>
                </div>
            </div>

            <CopyBlock filename={file.path} maxHeight="26rem">{file.code}</CopyBlock>
        </div>
    );
}
