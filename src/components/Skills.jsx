import { motion } from "framer-motion"

const skills = [
    { name: "TypeScript", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Next.js", level: 70 },
  { name: "Tailwind", level: 85 },
  { name: "Node.js", level: 70 },
  {name:"Figma", level: 60},

]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-secondary mb-8">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="mb-4"
            >
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-secondary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}