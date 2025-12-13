"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, FileText, Calendar, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchDocs, type SearchResult } from "@/lib/search-index";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Get Started": <Sparkles className="h-4 w-4" />,
  "Event Management": <Calendar className="h-4 w-4" />,
  "Engineering Notes": <BookOpen className="h-4 w-4" />,
  "AI Assistant": <Sparkles className="h-4 w-4" />,
};

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchDocs(query);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelectResult(results[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleSelectResult = (result: SearchResult) => {
    router.push(result.href);
    onClose();
    setQuery("");
    setResults([]);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
        <div
          className="w-full max-w-2xl bg-background border rounded-lg shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="relative border-b">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-14 text-base border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query.trim() && results.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm">No results found for "{query}"</p>
                <p className="text-xs mt-2">Try a different search term</p>
              </div>
            ) : query.trim() && results.length > 0 ? (
              <div className="p-2">
                {results.map((result, index) => (
                  <button
                    key={result.href}
                    onClick={() => handleSelectResult(result)}
                    className={cn(
                      "w-full text-left p-4 rounded-lg transition-colors flex items-start gap-3 group",
                      selectedIndex === index
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-muted/50 border border-transparent"
                    )}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors">
                      {categoryIcons[result.category] || <FileText className="h-4 w-4" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {result.title}
                        </span>
                        <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-muted">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-sm font-medium mb-2">Search documentation</p>
                <p className="text-xs">Type to search for pages, features, and guides</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl</kbd>
                  <span className="text-xs">+</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">K</kbd>
                  <span className="text-xs text-muted-foreground">to open search</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}


