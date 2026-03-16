import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Calendar } from "lucide-react";
import { useState } from "react";
import profilePhoto from "../../public/pic.jpeg";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter signup:", { name, email });
    setName("");
    setEmail("");
  };

  return (
    <section className="py-20 px-6 bg-card/50 border-t border-border">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center mb-6">
          <img
            src={profilePhoto}
            alt="Arbaz Alam"
            className="w-16 h-16 rounded-full object-cover border-2 border-border"
          />
          <div className="ml-4 text-left">
            <h3 className="font-semibold text-foreground">Arbaz Alam</h3>
            <p className="text-sm text-muted-foreground">@arbazXcode</p>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-muted-foreground mb-4">
            You can schedule a call with me to discuss anything you'd like. I'm
            always open to new ideas and opportunities.
          </p>
          <Button
            variant="outline"
            className="bg-green-950 border-green-800 text-green-100 hover:bg-green-900"
            onClick={() =>
              window.open("https://calendly.com/arbazjmi79/30min", "_blank")
            }
          >
            <Calendar className="w-4 h-4 mr-2" />
            Cal.com
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
