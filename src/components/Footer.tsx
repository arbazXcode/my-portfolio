import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-secondary/50 to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Quote */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text">
            "Learning, Living, and Leveling Up."
          </h3>
          <p className="text-lg text-muted-foreground">Get in Touch</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open("https://github.com/arbazXcode", "_blank")
            }
            className="hover:text-primary hover:border-primary"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open("https://www.linkedin.com/in/arbazmait", "_blank")
            }
            className="hover:text-primary hover:border-primary"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open("https://www.instagram.com/arrearbaz/", "_blank")
            }
            className="hover:text-primary hover:border-primary"
          >
            <Instagram className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open("mailto:  arbazjmi79@gmail.com")}
            className="hover:text-primary hover:border-primary"
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>

        {/* Back to Top */}
        <Button
          variant="ghost"
          onClick={scrollToTop}
          className="text-muted-foreground hover:text-primary"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Back to Top
        </Button>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            Design & Built by Arbaz Alam © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
