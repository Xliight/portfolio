import { useState } from "react";
// Assuming 'cn' is a utility function for combining class names (like 'clsx' or 'classnames')
import { cn } from "@/lib/utils";

const skills = [
  // --- Technicals (Backend) ---
  { name: "Java / JEE", level: 95, category: "backend" },
  { name: "Spring Boot & Microservices", level: 95, category: "backend" },
  { name: "FastAPI", level: 75, category: "backend" },
  // --- Technicals (DevOps, DB & Tools - Mapped to 'tools') ---
  // Databases
  { name: "PostgreSQL", level: 90, category: "tools" }, // Heavily used
  { name: "MySQL, MongoDB, Redis", level: 75, category: "tools" },

  // DevOps & Cloud
  { name: "AWS", level: 80, category: "tools" },
  { name: "Kubernetes (K8s)", level: 85, category: "tools" }, // Based on CV (K8s 1.31)
  { name: "Terraform", level: 75, category: "tools" },
  { name: "Jenkins, SonarQube, ArgoCD", level: 70, category: "tools" },

  // --- Technicals (Frontend) ---
  { name: "Angular ", level: 85, category: "frontend" }, // Based on CV (Angular 19)
  { name: "React.js", level: 70, category: "frontend" },
  { name: "Tailwind", level: 70, category: "frontend" },

  // CI/CD, Code Management & Testing
  { name: "Git, GitHub, GitLab CI", level: 90, category: "tools" },
  { name: "JUnit, Mockito, Postman, JMeter", level: 85, category: "tools" },

  // Systems & Automation
  { name: "Python / Bash", level: 70, category: "tools" },
];

// Define the categories for filtering
const categories = ["all", "backend", "frontend", "tools"];

// Custom labels for the category buttons
const categoryLabels = {
  'all': 'All Skills',
  'frontend': 'Frontend',
  'backend': 'Backend',
  'tools': 'DevOps & DB' // A better label for the collected technical tools
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Technical Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-forefround hover:bd-secondary"
                    )}
                >
                  {categoryLabels[category]}
                </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
                <div
                    key={key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                >
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                    <div
                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                        style={{ width: skill.level + "%" }}
                    />
                  </div>

                  <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};