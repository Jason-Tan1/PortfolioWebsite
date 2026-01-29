import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lifeByDormLogo from "../assets/lifebydorm-logo-full.png";
import tenantShieldLogo from "../assets/tenantshield-logo.png";

export function Projects() {
  const projects = [
    {
      title: "LifeByDorm",
      description: "A full-stack B2C web platform that brings university students across Canada to make informed housing decisions by providing a hub for comparing authentic peer reviews of on-campus dormitories.",
      image: lifeByDormLogo,
      technologies: ["TypeScript", "React", "Express.js", "Node.js", "MongoDB", "Docker", "AWS S3", "AWS Lambda"],
      github: "https://github.com/Jason-Tan1",
      demo: "#"
    },
    {
      title: "TenantShield (1st Place)",
      description: "AI-powered tenant rights assistant. Upload photos of mold, pests, leaks, or damage; the app analyzes evidence, cites local housing laws, and drafts a ready-to-send legal notice for tenants to help confront landlords.",
      image: tenantShieldLogo,
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
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden bg-white p-4 flex items-center justify-center">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
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