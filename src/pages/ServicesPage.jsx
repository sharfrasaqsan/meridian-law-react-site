import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services — UK Startup & Tech Solicitors" 
        description="Comprehensive legal services for UK technology companies. SEIS/EIS rounds, EMI schemes, commercial contracts, IP strategy, and GDPR compliance."
      />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-widest">
                Legal Expertise
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Empowering Every Stage of <span className="text-gold-400">Growth</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              We provide precise, commercial-focused legal counsel for London's most ambitious technology founders 
              under English Law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-navy-50 rounded-xl">
                      <service.icon className="w-8 h-8 text-navy-600" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-navy-800">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-gold-500">
                    <h4 className="text-sm font-bold text-navy-800 uppercase tracking-wider mb-2">Example Engagement:</h4>
                    <p className="text-gray-600 text-[0.95rem] leading-relaxed italic">
                      "{service.useCase}"
                    </p>
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                  <div className="aspect-[4/3] bg-navy-900/5 rounded-3xl overflow-hidden border border-navy-100 flex items-center justify-center p-12">
                     <service.icon className="w-32 h-32 text-navy-200/50" />
                  </div>
                  {/* Floating Stat or Highlight */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={`absolute -bottom-6 ${i % 2 === 1 ? '-right-6' : '-left-6'} p-8 bg-white shadow-xl rounded-2xl border border-gray-100 max-w-xs`}
                  >
                    <p className="text-navy-900 font-heading font-bold leading-snug">
                      "{service.shortDescription}"
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight">
              Ready to build your <span className="text-gold-400">UK technology</span> legal foundation?
            </h2>
            <div className="flex flex-wrap gap-6">
              <a href="/contact" className="px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-gold-600 transition-all flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/case-studies" className="px-8 py-4 bg-navy-800 text-white font-bold rounded-lg hover:bg-navy-700 transition-all">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
