import { motion } from 'framer-motion'
import { GraduationCap, Award, Building } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { teamMembers } from '../data/testimonials'

const values = [
  {
    title: 'Precision in Practice',
    description: 'We prioritize technical accuracy under English Law. There is no such thing as "good enough" for your company\'s legal foundation.',
  },
  {
    title: 'Efficiency First',
    description: 'We respect your roadmap. No billable-hour fluff—just results-driven counsel that moves your business forward in London and beyond.',
  },
  {
    title: 'Future-Focused',
    description: 'We anticipate the needs of your next funding round or acquisition, building defensible value into every document we draft.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About Our Lab Firm" 
        description="Learn about Meridian Law Group, London's leading tech-specialist law firm. Our mission, values, and the expert solicitors behind our firm."
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-widest">
                Our Firm
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-6">
              Expertise for <span className="text-gold-400">Entrepreneurs</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-10">
              Founded in London with a single conviction: High-growth technology companies deserve legal counsel that matches their speed, scale, and strategic vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & History */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading
                badge="The Meridian Story"
                title="Bridge The Gap Between Tech & Law"
                subtitle="Why we built a different kind of firm for the UK innovation market."
                align="left"
              />
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  For too long, London startup founders have were forced to choose between massive, slow firms with "Magic Circle" rates or local generalists who lacked the technical depth to understand a proprietary AI model or a complex fintech product.
                </p>
                <p>
                  Meridian Law Group was established to solve this problem. We are a team of expert UK solicitors who have worked at the highest levels of corporate law and in-house at high-growth tech ventures.
                </p>
                <p>
                  We operate as your strategic legal partner, providing the precision of institutional law with the agility needed to compete in Shoreditch and beyond.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-navy-500/5 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-heading font-bold text-navy-900 mb-1">250+</span>
                  <span className="text-navy-600 text-sm font-semibold">UK Startups</span>
                </div>
                <div className="bg-gold-500/5 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-heading font-bold text-gold-700 mb-1">£2.0B</span>
                  <span className="text-gold-600 text-sm font-semibold">Transactions</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gold-500/5 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-heading font-bold text-gold-700 mb-1">10+</span>
                  <span className="text-gold-600 text-sm font-semibold">Exit Deals</span>
                </div>
                <div className="bg-navy-500/5 p-4 rounded-2xl aspect-square flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-heading font-bold text-navy-900 mb-1">98%</span>
                  <span className="text-navy-600 text-sm font-semibold">Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="The Meridian Standard"
            subtitle="The principles that guide how we represent the UK's most promising ventures."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-navy-50 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership"
            title="Our Expert Solicitors"
            subtitle="A hand-picked team of some of the London's most capable technology lawyers."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:border-navy-100 transition-all duration-300 border border-transparent"
              >
                <div className="w-20 h-20 bg-navy-900 rounded-full flex items-center justify-center font-heading font-bold text-2xl text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-heading font-bold text-navy-800 mb-1">{member.name}</h3>
                <p className="text-gold-700 text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{member.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>{member.barAdmission}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
