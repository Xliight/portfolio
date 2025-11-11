import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils"; // cn is still useful for general utility, though less needed here
// Removed useState and useToast as they are no longer needed without the form
// Removed Send, Instagram, Twitch, Twitter imports as they are no longer used

export const ContactSection = () => {
  // Removed handleSubmit, isSubmitting state, and toast as the form is gone

  return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          {/* MODIFIED: Centering the single column */}
          <div className="flex justify-center"> {/* Use flexbox to center its child */}
            <div className="space-y-8 max-w-md w-full text-center"> {/* Added max-w-md and text-center */}
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>

              {/* Changed justify-center on space-y-6 to text-left for items, and centered the container */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 justify-center md:justify-start"> {/* Centered items */}
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left"> {/* Ensures text itself is left-aligned within its div */}
                    <h4 className="font-medium"> Email</h4>
                    <a
                        href="mailto:abdelfattah.mostakir@gmail.com" // Use mailto for direct email
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abdelfattah.mostakir@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 justify-center md:justify-start"> {/* Centered items */}
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left"> {/* Ensures text itself is left-aligned within its div */}
                    <h4 className="font-medium"> Phone</h4>
                    <a
                        href="tel:+212 693 228 504"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +212 693 228 504
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 justify-center md:justify-start"> {/* Centered items */}
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left"> {/* Ensures text itself is left-aligned within its div */}
                    <h4 className="font-medium"> Location</h4>
                    {/* Changed to a span as it's not a clickable link */}
                    <span className="text-muted-foreground">
                    Casablanca, Morocco
                  </span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center"> {/* Kept this centered */}
                  <a href="https://www.linkedin.com/in/abdelfettah-mostakir/" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                  </a>
                  {/* You can add other social media links here if you have them */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};