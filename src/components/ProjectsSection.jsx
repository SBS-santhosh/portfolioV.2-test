import { ArrowRight, ExternalLink } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Rapport de stage XEFI Sannois",
    description:
      "Rapport de stage effectué du 26 mai au 25 juillet 2025 chez XEFI Sannois.",
    image: "/projects/Logo xefi.png",
    tags: ["Stage", "XEFI", "Sannois"],
    demoUrl:
      "https://drive.google.com/drive/folders/1uR4cI2NWMntxLgwFTPUlVuI78uHnlRT9?usp=sharing",
    date: "2025-05-30",
  },
  {
    id: 2,
    title: "Rapport de stage Tekwave",
    description:
      "Rapport de stage effectué du 15 janvier au 9 février 2024 chez Tekwave, Bondy.",
    image: "/projects/Logo Tekwave.jpg",
    tags: ["Stage", "Tekwave", "Bondy"],
    demoUrl:
      "https://drive.google.com/drive/folders/1Yk5rtkEuymYIwcxrQARbezshRJNYA3Pn?usp=drive_link",
    date: "2024-02-30",
  },
  {
    id: 3,
    title: "Rapport de stage GK",
    description:
      "Rapport de stage effectué du 21 novembre au 16 décembre 2022 chez GK Multiservice, Bobigny.",
    image: "/projects/Logo GK.jpg",
    tags: ["Stage", "GK Multiservice", "Bobigny"],
    demoUrl:
      "https://drive.google.com/drive/folders/1LsPD_AXkQb2A-ke2So0Yj3agY4Pq3Xir?usp=drive_link",
    date: "2022-12-26",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
         Projet <span className="text-primary"> Professionnels </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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
            href="https://github.com/SBS-santhosh"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
