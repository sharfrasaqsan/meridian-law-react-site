import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="group h-full bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg hover:border-navy-100 transition-all duration-300">
        <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-navy-800 transition-colors duration-300">
          <Icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-heading font-semibold text-navy-800 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 hover:text-gold-600 transition-colors"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  )
}
