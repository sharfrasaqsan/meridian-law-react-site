import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/case-studies#${study.id}`}
        className="group block h-full bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg hover:border-navy-100 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-medium uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
            {study.category}
          </span>
          <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-navy-600 transition-colors" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-navy-800 mb-3 group-hover:text-navy-600 transition-colors">
          {study.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {study.problem}
        </p>
        {study.stats && (
          <div className="flex gap-6 pt-4 border-t border-gray-50">
            {Object.entries(study.stats).slice(0, 3).map(([key, value]) => (
              <div key={key}>
                <div className="text-lg font-heading font-bold text-navy-800">{value}</div>
                <div className="text-xs text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  )
}
