import React, { useState, useEffect, useRef } from 'react';

export default function PhoneMockup({ url, title, screenshot }) {
  const [loading, setLoading] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const iframeRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // If iframe doesn't load within 6s, assume X-Frame blocked → fallback
    timeoutRef.current = setTimeout(() => {
      if (loading) setBlocked(true);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoad = () => {
    setLoading(false);
    clearTimeout(timeoutRef.current);
    // Try to detect cross-origin block — most blocked sites still fire load
    try {
      const doc = iframeRef.current?.contentDocument;
      if (doc && doc.body && doc.body.children.length === 0) {
        setBlocked(true);
      }
    } catch (e) {
      // cross-origin access denied is normal; not necessarily blocked
    }
  };

  const handleError = () => {
    setLoading(false);
    setBlocked(true);
  };

  return (
    <>
      <style>{`
.phone-wrap{display:flex;justify-content:center;margin:14px 0 16px}
.phone{position:relative;width:230px;height:470px;background:#0b0b0f;border-radius:38px;padding:10px;box-shadow:0 25px 50px rgba(0,0,0,.45),inset 0 0 0 2px rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12)}
.phone::before{content:"";position:absolute;top:14px;left:50%;transform:translateX(-50%);width:90px;height:22px;background:#000;border-radius:14px;z-index:3}
.phone::after{content:"";position:absolute;bottom:6px;left:50%;transform:translateX(-50%);width:70px;height:4px;background:rgba(255,255,255,.35);border-radius:4px;z-index:3}
.phone-screen{position:relative;width:100%;height:100%;border-radius:30px;overflow:hidden;background:#111;}
.phone-screen iframe{border:0;width:100%;height:100%;display:block;background:#fff}
.phone-fallback{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#1e293b,#0f172a);color:#cbd5e1;font-size:13px;text-align:center;padding:20px;gap:10px}
.phone-fallback img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}
.phone-loader{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.85);z-index:2;color:#a5b4fc;font-size:13px;gap:10px}
.spinner{width:22px;height:22px;border:2px solid rgba(165,180,252,.3);border-top-color:#a5b4fc;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.open-tab{display:inline-block;margin-top:8px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:10px 14px;border-radius:12px;font-weight:600;font-size:13px;border:none;cursor:pointer;transition:.25s}
.open-tab:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(99,102,241,.3)}
@media(max-width:640px){.phone{width:200px;height:410px}}
      `}</style>
      <div className="phone-wrap">
        <div className="phone">
          <div className="phone-screen">
            {!blocked && (
              <iframe
                ref={iframeRef}
                src={url}
                title={title}
                onLoad={handleLoad}
                onError={handleError}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                loading="lazy"
              />
            )}
            {loading && !blocked && (
              <div className="phone-loader">
                <div className="spinner" />
                <span>Loading preview…</span>
              </div>
            )}
            {blocked && (
              <div className="phone-fallback">
                {screenshot ? (
                  <img src={screenshot} alt={title} />
                ) : (
                  <>
                    <strong style={{color:'#f1f5f9'}}>{title}</strong>
                    <span>Live preview unavailable.<br/>Open in a new tab to view.</span>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="open-tab">Open in New Tab ↗</button>
      </a>
    </>
  );
}
