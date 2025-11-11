import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Backend Engineer & DevOps Enthusiast
              </h3>

              <p className="text-muted-foreground">
                I'm a backend-focused developer who loves building reliable,
                scalable systems with Java, Spring Boot, and modern cloud-native
                tools. I enjoy crafting clean architectures, designing APIs, and
                making systems that are both powerful and easy to maintain.
              </p>

              <p className="text-muted-foreground">
                Beyond development, I'm passionate about DevOps: automating
                workflows, setting up CI/CD pipelines, working with Docker and
                Kubernetes, and deploying cloud-ready applications—especially
                on AWS. I love turning complex workflows into simple, automated,
                reproducible solutions.
              </p>

              <p className="text-muted-foreground">
                At my core, I’m a problem-solver. I enjoy learning, experimenting,
                and pushing myself to grow both as a developer and as a human.
              </p>

              {/* MODIFIED: Two buttons for CV download */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">Get In Touch</a>

                {/* Button for English CV */}
                <a
                    href="/projects/CV%20Abdelfettah_MOSTAKIR.pdf" // Update with the actual path to your English CV
                    download="ABDELFATTAH MOSTAKIR - CV English.pdf" // Suggests a filename for download
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center"
                >
                  Download CV (EN)
                </a>

                {/* Button for French CV */}
                <a
                    href="/projects/Abdelfettah_MOSTAKIR.pdf" // Update with the actual path to your French CV
                    download="ABDELFATTAH MOSTAKIR - CV French.pdf" // Suggests a filename for download
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center"
                >
                  Download CV (FR)
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Backend Development</h4>
                    <p className="text-muted-foreground">
                      Building scalable APIs, microservices, and backend systems
                      using Java, Spring Boot, and clean architecture principles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">DevOps & Automation</h4>
                    <p className="text-muted-foreground">
                      Implementing CI/CD pipelines, containerizing apps, and
                      deploying cloud-ready solutions using Docker, Kubernetes, and AWS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">System Design & Delivery</h4>
                    <p className="text-muted-foreground">
                      Bringing ideas from concept to production with clear
                      architecture, agile methodologies, and a strong engineering mindset.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
};