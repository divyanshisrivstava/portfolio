import { useEffect, useRef, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";

interface PhoneMockupProps {
  url: string;
  title: string;
  fallbackImage: string;
  isIcon?: boolean;
}

const PhoneMockup = ({ url, title, fallbackImage, isIcon }: PhoneMockupProps) => {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    // If iframe doesn't fire load within 6s, assume blocked (X-Frame-Options/CSP)
    const t = setTimeout(() => {
      if (!loadedRef.current) {
        setBlocked(true);
        setLoading(false);
      }
    }, 6000);
    return () => clearTimeout(t);
  }, [url]);

  const handleLoad = () => {
    loadedRef.current = true;
    setLoading(false);
    // Detect cross-origin blocked content (about:blank with empty body)
    try {
      const doc = iframeRef.current?.contentDocument;
      if (doc && doc.body && doc.body.children.length === 0 && !doc.title) {
        setBlocked(true);
      }
    } catch {
      // cross-origin access denied -> page actually loaded, not blocked
    }
  };

  return (
    <div className="relative mx-auto" style={{ width: 260, maxWidth: "100%" }}>
      {/* iPhone frame */}
      <div className="relative rounded-[2.2rem] bg-neutral-900 p-2 shadow-xl ring-1 ring-neutral-800">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-neutral-900" />
        {/* Screen */}
        <div
          className="relative overflow-hidden rounded-[1.7rem] bg-white"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
              <Loader2 className="h-5 w-5 animate-spin text-neutral-500" />
            </div>
          )}

          {!blocked ? (
            <iframe
              ref={iframeRef}
              src={url}
              title={title}
              onLoad={handleLoad}
              onError={() => {
                setBlocked(true);
                setLoading(false);
              }}
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="h-full w-full border-0 bg-white"
            />
          ) : (
            <img
              src={fallbackImage}
              alt={title}
              loading="lazy"
              decoding="async"
              className={
                isIcon
                  ? "absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 object-contain"
                  : "h-full w-full object-cover object-top"
              }
            />
          )}
        </div>
      </div>

      {/* Open in new tab */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => e.stopPropagation()}
        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        Open in new tab <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  );
};

export default PhoneMockup;