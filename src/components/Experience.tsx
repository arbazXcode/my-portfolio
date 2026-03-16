import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
  website?: string;
}

const experiences: ExperienceItem[] = [
  // {
  //   company: "Guildup Club",
  //   role: "Software Engineering",
  //   duration: "January 2025 - August 2025",
  //   location: "India, Remote",
  //   description: [
  //     "Developed the frontend architecture for GuildUp from scratch using Next.js, creating a seamless and scalable platform for creators to manage their communities.",
  //     "Implemented React Query for efficient state management, ensuring smooth data fetching, caching, and synchronization across interconnected applications.",
  //     "Designed and implemented Role-Based Access Control (RBAC) to manage user permissions, enhancing security and access control within the platform.",
  //   ],
  //   skills: ["NextJS", "Next Auth", "Redux Query", "Redux", "Tailwind CSS"],
  //   website: "https://guildup.club",
  //   logo: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1750500968/Union_x4ib2v.png",
  // },
  // {
  //   company: "Aequusplay",
  //   role: "Full Stack Developer",
  //   duration: "November 2024 - January 2025",
  //   location: "United Kingdom, Remote",
  //   description: [
  //     "Architected AequusPlay, a multiplayer gaming platform built with scalable microservices.",
  //     "Integrated Stripe for secure payments and subscriptions, enabling seamless in-game purchases.",
  //     "Deployed on AWS EC2 for scalable and reliable production hosting.",
  //   ],
  //   skills: [
  //     "NextJS",
  //     "TypeScript",
  //     "PostgreSQL",
  //     "WebSockets",
  //     "Stripe",
  //     "AWS EC2",
  //     "MongoDB",
  //     "Nodejs",
  //   ],
  //   website: "https://app.aequusplay.com",
  //   logo: "https://res.cloudinary.com/dzkldv06d/image/upload/v1733587217/Logo_ks7ahc.jpg",
  // },
  // {
  //   company: "Project Clay",
  //   role: "Frontend Developer - Freelance",
  //   duration: "November 2024 - January 2024",
  //   location: "India, Remote",
  //   description: [
  //     "Developed a frontend web application with pixel-perfect UI based on Figma designs.",
  //     " Maintained a strong focus on SEO to maximize visibility and reach.",
  //     "Followed best practices for reusability and maintainability in code",
  //   ],
  //   skills: ["NextJS", "Shadcn", "NextAuth", "Tailwind CSS"],
  //   website: "https://www.projectclay.com",
  //   logo: "https://framerusercontent.com/images/ii9vfAyQwazl731JTYBku4kjAY0.png",
  // },
  // {
  //   company: "Verifye",
  //   role: "Frontend Engineering Intern",
  //   duration: "September 2024 - October 2024",
  //   location: "United States, Remote",
  //   description: [
  //     "Developed a frontend web application with Next.js, integrating an ML model for detecting fake news across videos, images, and audio, achieving 85% accuracy in content verification.",
  //     "Implemented Kinde for secure user authentication, increasing user trust and data security by 30%.",
  //     "Collaborated on integrating a Python-based ML model into the Next.js frontend, ensuring smooth communication with the backend for real-time fake news detection.",
  //   ],
  //   skills: ["Shadcn", "Kinde Auth", "React Chart", "Tailwind CSS"],
  //   website: "https://verifye.ai",
  //   logo: "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354026/verifye_kltiv8.png",
  // },
  {
    company: "Slingshot",
    role: "Full Stack Intern",
    duration: "July 2024 - October 2024",
    location: "United States, Remote",
    description: [
      "Developed a medical report simplification website that enables users to upload medical reports, which are then simplified into plain English.",
      "Integrated ChatGPT-4 API for generating user-friendly summaries and DALL-E for creating medical images, reducing image generation time by 50% and improving report readability by 80%.",
      "Built a full-stack application using React, Tailwind CSS, and MongoDB for the frontend and backend, ensuring smooth user interactions and data management.",
    ],
    skills: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "ChatGPT-4",
      "DALL-E",
      "Express.js",
      "Node.js",
      "REST APIs",
    ],
    logo: "https://www.f6s.com/content-resource/profiles/2763568_th1.jpg",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Building solutions across startups and growing companies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company + " logo"}
                        className="w-12 h-12  object-contain  rounded-full border border-border shadow"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    {exp.website && (
                      <ExternalLink
                        className="w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer"
                        onClick={() => window.open(exp.website, "_blank")}
                      />
                    )}
                  </div>
                  <h4 className="text-lg font-medium text-primary mb-2">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
                <div className="text-sm font-medium text-muted-foreground md:text-right">
                  {exp.duration}
                </div>
              </div>

              <ul className="space-y-3 mb-6 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-xs bg-secondary/50 text-secondary-foreground border-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
