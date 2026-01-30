import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Settings, Database, Server, Layout, Terminal } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Terminal,
      title: "Languages",
      skills: [
        { name: "Java", logo: "https://skillicons.dev/icons?i=java" },
        { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
        { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
        { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
        { name: "C", logo: "https://skillicons.dev/icons?i=c" },
        { name: "HTML5", logo: "https://skillicons.dev/icons?i=html" },
        { name: "CSS3", logo: "https://skillicons.dev/icons?i=css" },
        { name: "Assembly RISC-V", logo: "https://cdn.simpleicons.org/riscv/000000" } // Simple Icons for RISC-V (black color to ensure visibility if supported, or default)
      ]
    },
    {
      icon: Layout,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", logo: "https://skillicons.dev/icons?i=react" },
        { name: "React Native", logo: "https://skillicons.dev/icons?i=react" }, // React logo
        { name: "Node.js", logo: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Express.js", logo: "https://skillicons.dev/icons?i=express" },
        { name: "Tailwind CSS", logo: "https://skillicons.dev/icons?i=tailwind" },
        { name: "JUnit", logo: "https://cdn.simpleicons.org/junit/25A162" }, // JUnit logo
        { name: "Supertest", logo: "https://skillicons.dev/icons?i=npm" }, // Using NPM logo as fallback/closely related
        { name: "Vitest", logo: "https://skillicons.dev/icons?i=vitest" },
      ]
    },
    {
      icon: Database,
      title: "Tools & Platforms",
      skills: [
        { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
        { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase" },
        { name: "Docker", logo: "https://skillicons.dev/icons?i=docker" },
        { name: "AWS Lambda", logo: "https://skillicons.dev/icons?i=aws" },
        { name: "AWS S3", logo: "https://skillicons.dev/icons?i=aws" },
        { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/008CDD" }, // Stripe logo
        { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
        { name: "Vercel", logo: "https://skillicons.dev/icons?i=vercel" },
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Decorative background elements matching Education */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border px-3 py-2 rounded-lg transition-all duration-200 cursor-default"
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-5 h-5 object-contain"
                          onError={(e) => {
                            // Fallback to just hiding the image if it fails
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}