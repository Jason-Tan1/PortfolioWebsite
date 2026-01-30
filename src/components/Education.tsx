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
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl">Education</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My academic journey and achievements
                    </p>
                </div>

                <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden group">


                    <CardHeader className="p-4 sm:p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center md:items-center">
                            {/* Logo Section */}
                            <div className="mx-auto md:mx-0 shrink-0">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-white flex items-center justify-center p-2 sm:p-4 shadow-md border border-border/10">
                                    <ImageWithFallback
                                        src={lassondeLogo}
                                        alt="Lassonde School of Engineering"
                                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow space-y-4 text-center md:text-left w-full">
                                <div className="space-y-2">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                                        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold flex items-center md:items-start gap-3">
                                            <span>Bachelor of Science, Computer Science (Honours)</span>
                                        </CardTitle>

                                        <div className="flex items-center justify-center gap-2 text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full text-sm font-medium w-fit mx-auto md:mx-0 shrink-0">
                                            <CalendarDays className="h-4 w-4 text-primary" />
                                            <span>Expected May 2028</span>
                                        </div>
                                    </div>

                                    <div className="text-lg sm:text-xl text-primary font-medium">
                                        York University, Lassonde School of Engineering
                                    </div>
                                    <div className="text-muted-foreground flex items-center justify-center md:justify-start gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-primary/50" />
                                        Toronto, Ontario
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-4 sm:p-6 md:p-8 pt-0 grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Coursework Column */}
                        <div className="space-y-4">
                            <h4 className="flex items-center gap-2 font-semibold text-lg border-b border-border/40 pb-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                Relevant Coursework
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {coursework.map((course) => (
                                    <Badge
                                        key={course}
                                        variant="secondary"
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default px-3 py-1 text-sm font-normal"
                                    >
                                        {course}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Awards Column */}
                        <div className="space-y-4">
                            <h4 className="flex items-center gap-2 font-semibold text-lg border-b border-border/40 pb-2">
                                <Award className="h-5 w-5 text-primary" />
                                Achievements & Awards
                            </h4>
                            <div className="space-y-3">
                                <div className="flex gap-3 items-start p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors border border-transparent hover:border-primary/10">
                                    <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                        <Award className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">1st Place & Best use of Gemini</p>
                                        <p className="text-sm text-muted-foreground">CSHub Hackathon</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors border border-transparent hover:border-primary/10">
                                    <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Scholarship</p>
                                        <p className="text-sm text-muted-foreground">$2,000 Award</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
