import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-widest">
                Startup & Technology Law
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Legal Expertise for{' '}
              <span className="text-gold-400">Modern Startups</span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10 max-w-2xl">
              We help startups protect, launch, and scale with confidence. From incorporation
              through Series B and beyond — strategic legal counsel that moves at your pace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-500 transition-colors text-base"
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy-500 text-navy-100 font-medium rounded-lg hover:bg-navy-700/50 transition-colors text-base"
              >
                Our Practice Areas
              </Link>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-10 border-t border-navy-700"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: '200+', label: 'Startups Represented' },
                { value: '$850M+', label: 'In Client Funding Raised' },
                { value: '98%', label: 'Client Retention Rate' },
                { value: '15+', label: 'Years Combined Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-navy-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
