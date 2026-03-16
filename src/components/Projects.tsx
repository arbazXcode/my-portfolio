import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  DemoVideo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Codearena - A Code Execution Platform",
    description:
      "A full-stack coding platform inspired by modern coding practice systems where users can write, execute, and test code in multiple programming languages. Built with a scalable backend architecture and secure code execution environment, the platform enables real-time code evaluation and an intuitive interface for practicing problem-solving skills.",
    image:
      "https://res.cloudinary.com/dyd1ppmd1/image/upload/v1773612077/Screenshot_2026-03-16_at_3.29.11_AM_kdb2le.png",

    githubUrl: "https://github.com/arbazXcode/codearena-project",
    featured: true,
    liveUrl: "https://codearena.me/",
  },
  {
    title: "GitChat - AI-Powered Repository Explorer",
    description:
      "An AI-powered GitHub repository exploration platform that allows developers to analyze and interact with repositories through an intuitive interface. Users can explore project structure, view files, inspect repository details, and chat with the repository to understand codebases faster and improve development productivity.",
    image:
      "https://res.cloudinary.com/dyd1ppmd1/image/upload/v1773612201/Screenshot_2026-03-16_at_3.33.11_AM_qyumd4.png",
    liveUrl: "https://git-chat-app.vercel.app/",
    githubUrl: "https://github.com/arbazXcode/git-chat-app",
    featured: true,
  },
  // {
  //   title: "IndiBlog",
  //   description:
  //     "A blogging platform using React for frontend rendering and Express.js for backend API development. Managed database operations with PostgreSQL integrated via Prisma ORM.",
  //   image:
  //     "https://res.cloudinary.com/dzvdh7yez/image/upload/v1757354536/Screenshot_2025-09-08_233203_pcd2kf.png",
  //   liveUrl: "https://indiblog.vercel.app",
  //   githubUrl: "https://github.com/AdarshSingh9540/Medium-client",
  //   featured: true,
  // },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-2 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-[1.05] animate-slide-up ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="outline"
                    className="h-8 w-8 "
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  {project.githubUrl && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 "
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex-[2] border-slate-700"
                    >
                      {project.liveUrl ? (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Preview
                        </div>
                      ) : (
                        <div>Integrate Locally</div>
                      )}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-[1] border-slate-800"
                    >
                      {project.liveUrl ? (
                        <div className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </div>
                      ) : (
                        <div>Integrate Locally</div>
                      )}
                    </Button>
                  )}
                  {project.DemoVideo && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.DemoVideo, "_blank")}
                      className="flex-[1] border-slate-800"
                    >
                      Demo Video
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {projects.length > 4 && (
          <div className="flex justify-center mt-10">
            {!showAll ? (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border-slate-700"
              >
                Show More
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(false)}
                className="px-8 py-3 border-slate-700"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
