import React, { useCallback, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShareNodes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

type OutputProps = {
  html: string;
  onCopy?: () => void;
  onShare?: () => void;
  onBack: () => void;
};

export default function Output({ html, onCopy, onShare, onBack }: OutputProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const getContentText = () => (contentRef.current?.innerText ?? "").trim();

  const copyText = async (text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const copyResponse = useCallback(async () => {
    const content = getContentText();
    if (content) await copyText(content);
  }, []);

  const shareResponse = useCallback(async () => {
    const content = getContentText();
    if (!content) return;

    const preview = content.length > 500 ? content.slice(0, 500) + "…" : content;

    if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: "Jelly Logic Business Solution",
          text: preview,
        });
      } catch {
        // user cancelled or failed
      }
    } else {
      await copyText(content);
    }
  }, []);

  const handleCopy = () => (onCopy ? onCopy() : copyResponse());
  const handleShare = () => (onShare ? onShare() : shareResponse());

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-4">
        {/* Top controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded border border-white/10 hover:bg-white/10"
            aria-label="Back to Home"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded bg-white/10 hover:bg-white/20"
              aria-label="Copy response"
            >
              <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
              Copy
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded bg-white/10 hover:bg-white/20"
              aria-label="Share response"
            >
              <FontAwesomeIcon icon={faShareNodes} className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Follow-up input */}
        <div className="bg-white/5 border border-jelly-500/20 rounded-2xl shadow-glow p-4 sm:p-5">
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              className="flex-1 bg-white/5 border border-jelly-500/30 rounded-lg px-3 py-3 text-sm placeholder:text-white/40"
              placeholder="Ask a follow-up question..."
            />
            <button className="px-4 sm:px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-jelly-500 via-purple-500 to-pink-300 text-white shadow-lg">
              Generate
            </button>
          </div>
        </div>

        {/* Output card */}
        <div className="bg-white/5 backdrop-blur-xl border border-jelly-500/20 rounded-2xl shadow-glow overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-5 py-3 bg-jelly-500/10 border-b border-white/10">
            <div className="text-sm font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              Business Solution
            </div>
            <div className="text-[11px] text-white/60">AI-crafted proposal</div>
          </div>

          <div
            id="outputContent"
            ref={contentRef}
            className="p-4 sm:p-6 text-[14px] leading-7 text-white/90 max-h-[70vh] overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      {/* Copy toast */}
      <div
        id="copyToast"
        role="status"
        aria-live="polite"
        className={[
          "fixed bottom-6 left-1/2 -translate-x-1/2",
          "px-3 py-2 rounded-lg text-xs",
          "bg-white/10 border border-white/20 backdrop-blur",
          "shadow-lg transition-opacity duration-200",
          copied ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        Copied to clipboard
      </div>
    </div>
  );
}
