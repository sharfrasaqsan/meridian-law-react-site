import { motion } from 'framer-motion'

export default function SectionHeading({ badge, title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      {badge && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className={`h-px w-8 ${light ? 'bg-gold-500' : 'bg-gold-400'}`} />
          <span
            className={`text-xs font-semibold uppercase tracking-widest ${
              light ? 'text-gold-400' : 'text-gold-600'
            }`}
          >
            {badge}
          </span>
          <div className={`h-px w-8 ${light ? 'bg-gold-500' : 'bg-gold-400'}`} />
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-heading font-bold mb-4 ${
          light ? 'text-white' : 'text-navy-800'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${light ? 'text-navy-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
