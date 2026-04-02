import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Rocket, Eye, ShieldCheck, Zap } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import CaseStudyCard from '../components/CaseStudyCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { services } from '../data/services'
import { caseStudies } from '../data/caseStudies'
import { testimonials } from '../data/testimonials'

const whyChooseUs = [
  {
    icon: Rocket,
    title: 'Startup Speed',
    description: 'We match your pace. No bureaucratic delays, just pragmatic legal solutions for UK tech founders.',
  },
  {
    icon: ShieldCheck,
    title: 'Watertight IP',
    description: 'Our proprietary IP identification and assignment protocols protect your most valuable UK assets.',
  },
  {
    icon: Zap,
    title: 'Future-Proof Advice',
    description: 'We don\'t just fix today\'s problems; we build the legal foundation for your Series A, B, and Exit.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Predictable, flat-fee pricing for many services — no surprise hourly bills from our London office.',
  },
]

const steps = [
  {
    title: 'Initial Consultation',
    description: 'We discuss your startup roadmap and identify immediate legal priorities under English Law.',
  },
  {
    title: 'Strategic Audit',
    description: 'We review existing IP, contracts, and cap table to ensure everything is investment-ready.',
  },
  {
    title: 'Execution & Support',
    description: 'Full-service execution from SEIS filings to complex multi-territory commercial agreements.',
  },
]

export default function HomePage() {
  return (
    <>
      <SEO 
        title="London Startup Solicitors — Meridian Law Group" 
        description="Expert legal advice for UK technology startups. From incorporation and SEIS/EIS rounds to IP protection and exit. London's leading tech solicitors."
      />
      
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Practices"
            title="Strategic Legal Partnership"
            subtitle="Expertise tailored for the unique lifecycle of UK technology companies."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Process"
            title="Operating at Startup Velocity"
            subtitle="We cut through the noise with a clear, 3-step process to secure your firm's legal future."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[28%] left-[20%] right-[20%] h-0.5 bg-gray-200" />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-navy-900 text-gold-500 rounded-2xl flex items-center justify-center font-heading font-bold text-2xl shadow-xl shadow-navy-100/50">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-800">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
                {i < steps.length - 1 && (
                   <ArrowRight className="md:hidden w-6 h-6 text-navy-200 my-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Success Stories"
            title="Proven Results in the UK Tech Hub"
            subtitle="From London fintechs to Cambridge AI scale-ups, we deliver measurable legal results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.slice(0, 2).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <motion.div whileHover={{ x: 5 }}>
              <a href="/case-studies" className="inline-flex items-center gap-2 text-navy-600 font-bold hover:text-gold-600 transition-colors">
                View All Case Studies <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800/20 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading
                badge="The Meridian Edge"
                title="Built for the UK Innovation Economy"
                subtitle="We combine Top-Tier London firm expertise with the speed and pragmatism of an in-house startup council."
                align="left"
                light
              />
              <div className="space-y-6 mt-12">
                {[
                   'Deep expertise in SEIS, EIS & EMI Share Schemes',
                   'A track record of closing Series A/B rounds in London',
                   'Proprietary IP assignment and protection protocols',
                   'Proactive compliance for UK GDPR and Data Ethics'
                ].map((item) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center gap-3 text-navy-200"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-navy-800/40 backdrop-blur-sm border border-navy-700/50 rounded-2xl group hover:border-gold-800/30 transition-all duration-300"
                >
                  <feature.icon className="w-10 h-10 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-navy-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by London's Rapid Growth Ventures"
            subtitle="Join a community of founders who rely on our counsel to scale securely under English Law."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
