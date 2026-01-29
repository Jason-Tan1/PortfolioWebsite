import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lassondeLogo from "../assets/lassonde-logo.png";

export function Education() {
    return (
        <section className="py-20 px-4 bg-secondary/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl">Education</h2>

                </div>

                <Card>
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 shrink-0 border border-border/10">
                                    <ImageWithFallback
                                        src={lassondeLogo}
                                        alt="Lassonde School of Engineering"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <div>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <GraduationCap className="h-6 w-6 text-primary" />
                                        Bachelor of Science, Computer Science (Honours)
                                    </CardTitle>
                                    <p className="text-primary mt-1 text-lg">York University, Lassonde School of Engineering</p>
                                    <p className="text-muted-foreground">Toronto, Ontario</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-muted-foreground font-medium">Expected May 2028</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="flex items-center gap-2 font-semibold mb-2">
                                <BookOpen className="h-4 w-4 text-primary" />
                                Relevant Coursework
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Object-Oriented Programming, Data Structures and Algorithms, Computer Organization,
                                Theory of Computation, Computing in Java, Discrete Mathematics, Statistics
                            </p>
                        </div>

                        <div>
                            <h4 className="flex items-center gap-2 font-semibold mb-2">
                                <Award className="h-4 w-4 text-primary" />
                                Awards
                            </h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>1st Place & Best use of Gemini - CSHub Hackathon</li>
                                <li>Scholarship ($2000)</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
