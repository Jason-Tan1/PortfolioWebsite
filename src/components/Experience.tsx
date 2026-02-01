import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "YU Blueprint",
      location: "Toronto, ON",
      period: "Jan 2026 - Present",
      description: "Team: Fix the 6ix",
      technologies: []
    },
    {
      title: "Head Waiter",
      company: "Black and White Restaurant",
      location: "Fergus, ON",
      period: "July 2020 – Aug 2024",
      description: "Led and trained 3 new staff members within an 8-person team to manage high-volume shifts, consistently resolving 95%+ of customer issues, directly contributing to enhanced customer satisfaction. Supported junior staff and maintained smooth shift operations through clear guidance and communication.",
      technologies: ["Leadership", "Team Management", "Customer Service", "Training"]
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional background and work history
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent before:hidden md:before:block">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

              {/* Timeline Dot */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>

              {/* Card Content */}
              <Card className="w-full md:w-[calc(50%-2.5rem)] border-border/50 bg-card/80 shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-0">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl font-bold flex flex-wrap gap-2 items-center justify-between">
                      <span>{exp.title}</span>
                      <Badge variant="secondary" className="text-xs font-normal">
                        {exp.period}
                      </Badge>
                    </CardTitle>
                    <div className="flex flex-wrap items-center justify-between gap-y-1 text-sm text-primary font-medium">
                      <span>{exp.company}</span>
                      <span className="flex items-center gap-1 text-muted-foreground font-normal">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed -mt-3">
                    {exp.description}
                  </p>
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/20 text-primary/80 hover:bg-primary/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}