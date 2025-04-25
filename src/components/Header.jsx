import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass mx-4 mt-4 rounded-full">
        <nav className="flex justify-between items-center p-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-secondary"
          >
            Tota port
          </motion.a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white cursor-pointer focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass mx-4 mt-2 rounded-xl"
          >
            <ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="block text-white hover:text-secondary transition-colors p-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}