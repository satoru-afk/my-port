import { motion } from "framer-motion";

const projects = [
  {
    title: "Project HUB",
    description: "This project is a modern, interactive website that features a to-do list for task management, a fun and engaging quiz game to test your knowledge, and a random joke generator to add a bit of humor and entertainment.",
    tags: ["HTML", "CSS", "JavaScript"],
    link:'https://satoru-afk.github.io/project_js_hub/',
    imgSrc:'/project-hub.png'
  },
  {
    title: "The Little Scent",
    description: "An online perfume store that offers a wide range of high-quality, unique, and even delusional fragrances, allowing customers to explore and purchase products without the need to log in or create an account. ",
    tags: ["Next.js", "typeScript", "TailwindCSS"],
    link:'https://littleperfume.netlify.app/shop',
    imgSrc:'/the-little-perfume.png'
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-secondary mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-xl dark:bg-dark-800"
            >
              <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-2">
                {project.title}
              </h3>

            <div className="broder border-2 rounded-lg border-white overflow-hidden">
              <img src={project.imgSrc} alt="project image"  className="object-cover"/>
            </div>

              <p className="text-primary dark:text-gray-300 mt-4 text-center mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-secondary bg-opacity-20 text-primary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 text-primary font-medium"
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
