import { ExternalLink ,Book } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Academy Cloud Foundations",
    description:
      "Formation terminée : Compréhension fondamentale des concepts, services, sécurité, architecture, tarification et support AWS.",
    image: "/certifications/AWS Academy Cloud Foundations.png",
    tags: ["AWS", "Cloud", "Foundations"],
    credentialUrl: "https://www.credly.com/badges/6ba622dd-bf7d-48a7-bebd-f3135c81cf9f/public_url",
    date: "2024",
    references: [
      { label: "My Lessons", url: "https://drive.google.com/drive/folders/1n0RoEW8-AT5vO9MD_xBDZQpScc-yiOJx?usp=sharing" }
    ],
  },
  {
    id: 2,
    title: "AWS Academy Cloud Developing",
    description:
      "En cours : Développement et maintenance d'applications sur la plateforme AWS, incluant les services principaux et les bonnes pratiques.",
    image: "/certifications/aws-academy-graduate-cloud-developing-training-badg.png",
    tags: ["AWS", "Cloud", "Developer"],
    credentialUrl: "https://www.credly.com/badges/a05f6de0-95bd-4eae-96cc-90d873c76d59/public_url",
    date: "2024",
  },
  {
    id: 3,
    title: "AWS Academy Cloud Architecting",
    description:
      "En cours : Conception et mise en œuvre d'infrastructures AWS, en se concentrant sur la scalabilité et la fiabilité.",
    image: "/certifications/AWS Academy Cloud Architecting.png",
    tags: ["AWS", "Cloud", "Architecting"],
    credentialUrl: "votre-url-certificat-cloud-architecting",
    date: "2024",
  },
];

export const CertificationSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-auto h-auto max-h-full object-contain p-4"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View credential"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 p-1"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {cert.references?.map((ref, i) => (
                      <a
                        key={i}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={ref.label}
                        className="text-foreground/70 hover:text-primary transition-colors duration-200 p-1"
                      >
                        <Book size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
