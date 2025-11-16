import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Rapport de stage XEFI Sannois",
    category: "Stage",
    date: "Mai 26, 2025",
    description: "Rapport de stage effectué du 26 mai au 25 juillet 2025 chez XEFI Sannois.",
    image: "/Logo xefi.png",
    link: "https://drive.google.com/drive/folders/1uR4cI2NWMntxLgwFTPUlVuI78uHnlRT9?usp=sharing"
  },
  {
    id: 2,
    title: "Rapport de stage Tekwave",
    category: "Stage",
    date: "Fab 30, 2024",
    description: "Rapport de stage effectué du 15 janvier au 9 février 2024 chez Tekwave, Bondy.",
    image: "/Logo Tekwave.jpg",
    link: "https://drive.google.com/drive/folders/1Yk5rtkEuymYIwcxrQARbezshRJNYA3Pn?usp=drive_link"
  },
  {
    id: 3,
    title: "Rapport de stage GK",
    category: "Stage",
    date: "Dec 30, 2022",
    description: "Rapport de stage effectué du 21 novembre au 16 décembre 2022 chez GK Multiservice, Bobigny.",
    image: "/Logo GK.jpg",
    link: "https://drive.google.com/drive/folders/1LsPD_AXkQb2A-ke2So0Yj3agY4Pq3Xir?usp=drive_link"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <nav className="flex justify-center gap-6 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
          <Link to="/projets" className="text-primary">Projet</Link>
          <Link to="/certifications" className="hover:text-primary transition-colors">Certifications</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <a 
            href="/CV stage 2025.pdf" 
            download 
            className="hover:text-primary transition-colors"
          >
            CV
          </a>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span>•</span>
                  <time>{post.date}</time>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};