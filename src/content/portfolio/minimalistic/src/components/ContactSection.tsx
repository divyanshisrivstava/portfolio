import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
        styles: {
          branding: { brandColor: "#000000" }
        }
      });
    })();
  }, []);

  return (
    <section id="contact" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground font-heading">Get in touch</h2>
            <p className="mt-1 text-[15px] text-muted-foreground">
              Book a call or reach out via email
            </p>
          </div>
          <a
            href="mailto:ayushsriavstava@gmail.com"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 mt-2"
          >
            ayushsriavstava@gmail.com
          </a>
        </div>
        <div className="bg-background rounded-lg border border-border/40 overflow-hidden shadow-sm" style={{ height: "650px" }}>
          <Cal
            namespace="30min"
            calLink="miracneroid/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ 
              layout: "month_view",
              theme: "light"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
