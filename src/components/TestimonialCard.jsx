import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-xl p-8"
    >
      <Quote className="w-8 h-8 text-gold-300 mb-4" />
      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
        <div className="w-11 h-11 bg-navy-800 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold text-gold-400">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <div className="font-semibold text-navy-800 text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
