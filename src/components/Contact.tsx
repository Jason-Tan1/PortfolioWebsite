import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://formsubmit.co/ajax/jasontanwork1@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        e.currentTarget.reset();
      } else {
        console.error("FormSubmit Error:", result);
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">jasontanwork1@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone</h4>
                    <p className="text-muted-foreground">+1 (226) 337-7465</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">Toronto, ON</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Jason-Tan1" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-center gap-3">
                    <Github className="h-6 w-6" />
                    <span>GitHub</span>
                  </CardContent>
                </Card>
              </a>
              <a href="https://linkedin.com/in/jasontan5" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Card className="hover:bg-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-center justify-center gap-3">
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" required disabled={isSubmitting} />
                  <Input name="email" type="email" placeholder="Your Email" required disabled={isSubmitting} />
                </div>
                <Input name="_subject" placeholder="Subject" required disabled={isSubmitting} />
                <Textarea name="message" placeholder="Your Message" rows={5} required disabled={isSubmitting} />
                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}