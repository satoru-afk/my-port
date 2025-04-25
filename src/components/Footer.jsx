import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/satoru-afk" },
  { name: "Instagram", url: "https://www.instagram.com/tokata.o0" },
]

export default function Footer() {
  return (
    <footer className="py-8 mt-12">
      <div className="glass p-6 rounded-3xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-white mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </motion.p>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ y: -3 }}
                className="text-white hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
};