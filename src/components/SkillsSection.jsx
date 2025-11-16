import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 🔹 Langages
  { name: "Python", category: "langages" },
  { name: "JavaScript", category: "langages" },
  { name: "HTML", category: "langages" },
  { name: "CSS", category: "langages" },
  { name: "Tailwind CSS", category: "langages" },
  { name: "TypeScript", category: "langages" },

  // 🔹 Bases de données
  { name: "MySQL", category: "databases" },
  { name: "PostgreSQL", category: "databases" },
  { name: "MongoDB", category: "databases" },
  { name: "DynamoDB", category: "databases" },

  // 🔹 Frameworks & Librairies
  { name: "Node.js", category: "frameworks" },
  { name: "Express", category: "frameworks" },
  { name: "Angular", category: "frameworks" },
  { name: "React Native", category: "frameworks" },
  { name: "Node-RED", category: "frameworks" },
  { name: "Nodemailer", category: "frameworks" },
  { name: "Vite", category: "frameworks" },
  { name: "PostCSS", category: "frameworks" },

  // 🔹 Outils & Systèmes
  { name: "Git", category: "tools" },
  { name: "Bash", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "IntelliJ", category: "tools" },
  { name: "Thonny", category: "tools" },
  { name: "Bruno", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Windows", category: "tools" },
  { name: "macOS", category: "tools" },

  // 🔹 Réseau & Virtualisation
  { name: "VirtualBox", category: "network" },
  { name: "Packet Tracer", category: "network" },
  { name: "PuTTY", category: "network" },
  { name: "Tera Term", category: "network" },

  // 🔹 Sécurité / Pentest
  { name: "Nmap", category: "security" },
  { name: "Aircrack-ng", category: "security" },
  { name: "Hashcat", category: "security" },
  { name: "Metasploit", category: "security" },
  { name: "Ettercap", category: "security" },
  { name: "John the Ripper", category: "security" },
];

const categories = [
  { id: "all", label: "Toutes les compétences" },
  { id: "langages", label: "Langages" },
  { id: "databases", label: "Bases de données" },
  { id: "frameworks", label: "Frameworks & Librairies" },
  { id: "tools", label: "Outils & Systèmes" },
  { id: "network", label: "Réseau & Virtualisation" },
  { id: "security", label: "Sécurité / Pentest" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences Techniques</span>
        </h2>

        {/* 🔘 Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 🧩 Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-center"
            >
              <h3 className="font-medium text-base">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};