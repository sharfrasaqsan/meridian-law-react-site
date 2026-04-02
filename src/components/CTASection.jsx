import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Get Legal Support for Your Startup Today',
  subtitle = 'Schedule a confidential consultation to discuss your legal needs. No obligation, no pressure — just clear, actionable guidance.',
  buttonText = 'Book a Consultation',
  buttonLink = '/contact',
}) {
  return (
    <section className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-5">
            {title}
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">{subtitle}</p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-500 transition-colors text-base"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
