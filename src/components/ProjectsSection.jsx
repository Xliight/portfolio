import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // 1. Current Role: Diot Sciaci Technology (Highest Priority)
  {
    id: 1,
    title: "Insurance Sector Applications",
    company: "Diot Sciaci Technology (07/2025 - Now)",
    description: " Development and enhancement of applications for the insurance sector. Involved in the conception and implementation of new business features , performance optimization, and bug fixing. Contributed to a project integrating Artificial Intelligence for marketing campaigns and established CI/CD pipelines",
    image: "/projects/download.jpeg", // Placeholder image
    tags: ["Java 21", "Spring Boot", "Angular 19", "FastAPI", "K8S", "PostgreSQL", "GitLab CI", "AI Integration"],
    demoUrl: "#", // Update with actual links if available
    githubUrl: "#", // Update with actual links if available
  },

  // 2. Previous Role: EASYPEASY (HORIZON GROUP)
  {
    id: 2,
    title: "High-Performance Insurance Management Platform",
    company: "EASYPEASY (HORIZON GROUP) (02/2025-06/2025)",
    description: "Contributed to the development and enhancement of a large-scale insurance management platform. Participated in the implementation of a high-performance with microservices architecture and deployment/monitoring of services on AWS.",
    image: "/projects/pizi.png", // Placeholder image
    tags: ["Java 21", "Spring Boot", "Microservices", "PostgreSQL", "AWS", "CI/CD"],
    demoUrl: "#",
    githubUrl: "#",
  },


  // 4. Internship: EAMBITION (Separated from PFE placeholder for clarity, but the CV lists it as an internship)
  {
    id: 3,
    title: "Backend Architecture Optimization",
    company: "EAMBITION (Internship) (09/2024-01/2025)",
    description: "Developed robust Java backend applications and focused on optimizing backend architectures. Successfully improved application performance and software quality by +40% through unit and integration testing. Integrated CI/CD pipelines (Jenkins) and collaborated on environment management and deployment monitoring (Kubernetes/ArgoCD).",
    image: "/projects/eambition.jpeg", // Placeholder image
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Kubernetes", "Jenkins", "SonarQube", "ArgoCD"],
    demoUrl: "#",
    githubUrl: "#",
  },

  // 5. Internship: OFFZONE AGENCY
  {
    id: 4,
    title: "FullStack Electronic Health Platform",
    company: "OFFZONE AGENCY (Internship) (02/2024-08/2024)",
    description: "Developed a complete electronic health platform. Handled full-stack development, implementing backend features with Spring Boot and front-end interfaces with ReactJS. Managed patient records, appointments, and secure communication. Contributed to integration and deployment using Docker.",
    image: "/projects/offzone.jpeg", // Placeholder image
    tags: ["Spring Boot", "ReactJS", "MySQL", "Docker", "FullStack"],
    demoUrl: "#",
    githubUrl: "#",
  },

  // 6. Freelance: SMART-M
  {
    id: 5,
    title: "Freelance SaaS Property Management Platform",
    company: "SMART-M (Freelance) (10/2023-01/2024)",
    description: "Contributed to the development of an online SaaS platform for property management. Responsibilities included implementing backend features with Spring Boot and developing front-end interfaces. Key contribution to cloud architecture and deployments on AWS using Terraform.",
    image: "/projects/syndicat.jpeg", // Placeholder image
    tags: ["Spring Boot", "ReactJS", "PostgreSQL", "AWS", "Terraform", "FullStack"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Professional Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing key achievements focused on **Java Backend, Microservices, and DevOps** from my professional experience, including my final engineering project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    {/* Image tag kept for structure, replace with actual project screenshots */}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagKey) => (
                          <span key={tagKey} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    {/* Added company/duration below title for context */}
                    <p className="text-primary text-sm font-medium mb-2">{project.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                // Ensure this link is updated to your actual GitHub profile!
                href="https://github.com/Xliight"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
  );
};