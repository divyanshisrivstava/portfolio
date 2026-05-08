import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${days[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}`;

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
        {/* Name and Title */}
        <div className="text-center mb-6">
          <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-1">
            Ayush Srivastava
          </h3>
          <p className="text-xs text-muted-foreground italic tracking-wide">
            Custom Software & Gen AI Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8 text-xs uppercase tracking-wider">
          <a 
            href="https://github.com/miracneroid" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Github
          </a>
          <a 
            href="https://www.x.com/miracneroid" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            X
          </a>
          <a 
            href="https://www.linkedin.com/in/miracneroid/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Time and Date */}
        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-8">
          <span className="font-mono">{formattedTime}</span>
          <span className="italic">{formattedDate}</span>
        </div>

        {/* Coordinates */}
        <div className="flex items-center justify-between text-[13px] text-muted-foreground">
          <span>25.5941° N</span>
          <span>85.1376° E</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
