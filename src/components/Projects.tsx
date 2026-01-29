import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lifeByDormLogo from "../assets/lifebydorm-logo-full.png";
import tenantShieldLogo from "../assets/tenantshield-logo.png";
import outTheGCLogo from "../assets/outthegroupchat-logo.jpg";
import ecommerceLogo from "../assets/ecommerce-logo.png";

export function Projects() {
  const projects = [
    {
      title: "LifeByDorm",
      description: "A full-stack B2C web platform that brings university students across Canada to make informed housing decisions by providing a hub for comparing authentic peer reviews of on-campus dormitories.",
      image: lifeByDormLogo,
      technologies: ["TypeScript", "React", "Express.js", "Node.js", "MongoDB", "Docker", "AWS S3", "AWS Lambda"],
      github: "https://github.com/Jason-Tan1/LifeByDorm",
      demo: "https://lifebydorm.ca"
    },
    {
      title: "TenantShield (1st Place Hackathon)",
      description: "AI-powered tenant rights assistant. Upload photos of mold, pests, leaks, or damage; the app analyzes evidence, cites local housing laws, and drafts a ready-to-send legal notice for tenants to help confront landlords.",
      image: tenantShieldLogo,
      technologies: ["React.js", "Express.js", "Node.js", "Gemini API", "Vercel", "Tailwind CSS"],
      github: "https://github.com/Jason-Tan1/TenantShield",
      demo: "https://tenant-shield-vert.vercel.app"
    },
    {
      title: "OutTheGroupChat",
      description: "AI-powered collaborative travel planner that helps create personalized itineraries and collaborate in real time using React, Firebase, and Gemini AI",
      image: outTheGCLogo,
      technologies: ["React.js", "Firebase", "Node.js", "Gemini API", "ElevenLabs API", "CSS3"],
      github: "https://github.com/Jason-Tan1/OutTheGroupChat",
      demo: "https://outthegroupchat1.web.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "A responsive full-stack E-commerce web app built with React, Firebase, and Stripe, featuring secure authentication, real-time cart updates, and optimized payment processing",
      image: ecommerceLogo,
      technologies: ["React.js", "Express.js", "Node.js", "Firebase", "Stripe", "CSS3", "HTML5"],
      github: "https://github.com/Jason-Tan1/EcommercePlatform",
      demo: ""
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
            <Card key={index} className="overflow-hidden gap-0">
              <div className="aspect-video overflow-hidden bg-white p-4 flex items-center justify-center">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader className="!pt-12 pb-0">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 !pt-2">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}