"use client";
import { GrLocation } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import profilepic from "../../public/pic.jpeg";
import { MdPersonalInjury } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
const Hero = () => {
  return (
    <section className="min-h-screen flex  justify-center px-6 py-20 bg-background">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-12 lg:gap-16 border p-10 rounded-lg">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <img
              src={profilepic}
              alt="Arbaz Alam"
              className="w-48 h-48 rounded-lg object-cover border-4 border-border shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-muted-foreground text-lg mb-2">Hello(); I'm</p>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Arbaz Alam
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">Software Engineer</p>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <TfiEmail className="w-4 h-4 text-muted-foreground" />
                <p className="text-muted-foreground">arbazjmi79@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <GrLocation className="w-4 h-4 text-muted-foreground" />
                <p className="text-muted-foreground">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <div className="flex items-center gap-2 justify-center lg:justify-start my-4">
            <MdPersonalInjury className="w-6 h-6 text-muted-foreground " />{" "}
            <h1 className="font-bold text-xl">About Me</h1>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 ">
            I'm Arbaz Alam, a software engineer with{" "}
            <span className="text-lg font-medium text-red-500"> 1.4+</span>{" "}
            years of experience who loves building web applications using both
            frontend and backend technologies. Currently, I focus on creating
            innovative GenAI products to solve real-world problems and enhance
            digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => window.open("mailto:arbazjmi79@gmail.com")}
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Talk!
            </Button>

            <Button
              size="lg"
              variant="outline"
              className=" px-8 py-3 border-slate-700"
              onClick={() =>
                window.open(
                  "https://calendly.com/singhadarsh9540/30min",
                  "_blank",
                )
              }
            >
              <SiGooglemeet className="w-5 h-5 mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
