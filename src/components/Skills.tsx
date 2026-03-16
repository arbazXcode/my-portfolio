const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Shadcn"],
    },
    {
      title: "Backend",
      skills: ["Express.js", "Node.js"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS"],
    },

    {
      title: "Others",
      skills: [
        "Git",
        "REST",
        "Prisma",
        "Mongoose",
        "WebSockets",
        "Payment Gateways",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text text-left">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-left">
            Here are some of the skills I have acquired over the years of my
            journey in the tech industry. I am always looking to learn more and
            improve my skillset.
          </p>
        </div>

        <div className="space-y-4 animate-slide-up">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="flex flex-wrap items-center mb-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-lg font-semibold text-muted-foreground mr-2 min-w-[120px]">
                {index + 1}. {category.title}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
