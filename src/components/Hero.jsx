import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 rounded-3xl max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-secondary">Tota</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary mb-6">
          A Web Developer
        </h2>
        <p className="text-white mb-8">
          I create beautiful, responsive websites with modern technologies.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-secondary text-primary px-6 py-3 rounded-full font-medium"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  )
}