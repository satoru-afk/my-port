import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl"
      >
        <h2 className="text-3xl font-bold text-secondary mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-white mb-4">
              Hi!. my name is tota a web developer based in Laos. I have a passion for creating beautiful and functional web applications. I specialize in front-end development, but I also have experience with back-end technologies.
            </p>
            <p className="text-white mb-4">
                I love learning new technologies and keeping up with the latest trends in web development. In my free time, I enjoy working on personal projects, contributing to open-source, and exploring new frameworks and libraries.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="bg-secondary text-white px-4 py-2 rounded-lg"
              >
                Download CV
              </motion.a> */}
              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                className=" bg-secondary text-primary px-4 py-2 rounded-lg max-sm:mx-auto"
              >
                My Work
              </motion.a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="glass p-2 rounded-full overflow-hidden">
              {/* Replace with your image */}
              <div className="w-64 h-64 rounded-full bg-gray-300">
                <img
                  src="/handsomeguy.jpeg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}