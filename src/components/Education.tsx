import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, BookOpen, CalendarDays } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lassondeLogo from "../assets/lassonde-logo.png";

export function Education() {
    const coursework = [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Computer Organization",
        "Theory of Computation",
        "Computing in Java",
        "Discrete Mathematics",
        "Statistics"
    ];

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background elements for visual interest */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl md:text-5xl">Education</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My academic journey and achievements
                    </p>
                </div>

                {/* Unified Education Card */}
                <Card className="border-border/50 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm relative group">
                    <div className="grid md:grid-cols-3">
                        {/* Left Sidebar - Branding & Identity */}
                        <div className="md:col-span-1 bg-secondary/10 p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-border/50 gap-6">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-4 shadow-lg border border-border/10 shrink-0 relative group-hover:scale-105 transition-transform duration-500">
                                <ImageWithFallback
                                    src={lassondeLogo}
                                    alt="Lassonde School of Engineering"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-primary">Computer Science</h3>
                                <p className="font-medium text-foreground">Bachelor of Science, Honours</p>
                                <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full my-3" />
                                <p className="text-sm font-semibold text-muted-foreground">York University - Lassonde School of Engineering</p>
                                <p className="text-xs text-muted-foreground">Toronto, ON</p>
                            </div>
                        </div>

                        {/* Right Content - Details */}
                        <div className="md:col-span-2 p-6 md:p-8 space-y-8 flex flex-col justify-center">
                            
                            {/* Coursework Section */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 font-semibold text-lg text-primary">
                                    <BookOpen className="h-5 w-5" />
                                    Relevant Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {coursework.map((course) => (
                                        <Badge
                                            key={course}
                                            variant="secondary"
                                            className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default px-3 py-1 text-sm font-normal border border-border/50"
                                        >
                                            {course}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px w-full bg-border/50" />

                            {/* Awards Section */}
                            <div className="space-y-4">
                                <h4 className="flex items-center gap-2 font-semibold text-lg text-primary">
                                    <Award className="h-5 w-5" />
                                    Achievements & Awards
                                </h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex gap-3 items-start p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                                        <div className="bg-primary/10 p-2 rounded-full shrink-0 mt-0.5">
                                            <Award className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm">1st Place & Best use of Gemini</p>
                                            <p className="text-xs text-muted-foreground">CSHub Hackathon</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start p-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors border border-transparent hover:border-primary/10">
                                        <div className="bg-primary/10 p-2 rounded-full shrink-0 mt-0.5">
                                            <GraduationCap className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground text-sm">Scholarship</p>
                                            <p className="text-xs text-muted-foreground">$2,000 Award</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}
