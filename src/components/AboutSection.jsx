import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos de <span className="text-primary">moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Côté gauche - Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Étudiant développeur passionné & Enthousiaste de la tech
            </h3>

            <p className="text-muted-foreground">
              Je suis <strong>Satheeskumar Santhosh</strong>, étudiant en BTS
              SIO SLAM basé à <strong>Argenteuil, France</strong>. Je suis
              passionné par le développement logiciel et je recherche
              actuellement un stage du{" "}
              <strong>1er décembre 2025 au 25 janvier 2026</strong>.
            </p>

            <p className="text-muted-foreground">
              Motivé, rigoureux et avide d'apprendre, j'aime travailler sur des
              projets concrets impliquant le développement web, le réseau et la
              cybersécurité. Je m'efforce d'améliorer continuellement mes
              compétences techniques et créatives à travers des projets
              personnels et de la veille technologique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me Contacter
              </a>

              {/* Bouton de téléchargement du CV */}
              <a
                href="/CV_stage_2025.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger le CV
              </a>
            </div>
          </div>

          {/* Côté droit - Compétences */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Développement</h4>
                  <p className="text-muted-foreground">
                    Compétences en Python, Java, JavaScript et React pour créer
                    des applications web et desktop interactives et
                    performantes.
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
                  <h4 className="font-semibold text-lg">
                    Compétences Techniques
                  </h4>
                  <p className="text-muted-foreground">
                    Expérience avec les réseaux, la virtualisation et les outils
                    de sécurité tels que VirtualBox, Nmap et Metasploit.
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
                  <h4 className="font-semibold text-lg">Expérience</h4>
                  <p className="text-muted-foreground">
                    Stages pratiques en support informatique, configuration de
                    systèmes et réseaux dans des entreprises telles que XEFI et
                    Tek Wave.
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
