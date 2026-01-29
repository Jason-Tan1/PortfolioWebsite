import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "LifeByDorm",
      description: "Architecting a scalable B2C full stack web platform via React, Express, Node.js, MongoDB, Docker, and AWS. Serving content for 30+ universities and 200+ dorms. Features secure REST APIs and S3 integration for user media.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      technologies: ["TypeScript", "React", "Express.js", "Node.js", "MongoDB", "Docker", "AWS S3"],
      github: "https://github.com/Jason-Tan1",
      demo: "#"
    },
    {
      title: "TenantShield",
      description: "1st Place Winner. Automated hazard detection using Gemini Vision AI API with 95%+ accuracy. Streamlined housing rights analysis and integrated Google Maps for legal resource location.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["React.js", "Express.js", "Node.js", "Gemini API", "Vercel"],
      github: "https://github.com/Jason-Tan1",
      demo: "#"
    },
    {
      title: "OutTheGroupChat",
      description: "AI-powered itinerary engine using Gemini API to generate day-by-day travel plans. Features Firebase Firestore backend and seamless React integration for 10+ users.",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&h=400&fit=crop",
      technologies: ["React.js", "Firebase", "Node.js", "Gemini API", "ElevenLabs API"],
      github: "https://github.com/Jason-Tan1",
      demo: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable e-commerce solution with Firestore database and Stripe payment processing. Improved checkout latency by 15% via caching.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Express.js", "Node.js", "Firebase", "Stripe"],
      github: "https://github.com/Jason-Tan1",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack
            development and modern DevOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}