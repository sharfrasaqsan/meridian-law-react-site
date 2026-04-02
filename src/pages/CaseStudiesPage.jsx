import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2, Award } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', ...new Set(caseStudies.map(study => study.category))]

  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <>
      <SEO 
        title="Case Studies — Our Success Stories" 
        description="Explore Meridian Law Group's success stories with UK fintechs, AI scale-ups, and technology startups across London and Cambridge."
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 text-sm font-medium uppercase tracking-widest">
                Our Track Record
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Results That <span className="text-gold-400">Matter</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              We have supported some of the most innovative startups in the UK Hub, helping them scale from 
              pre-seed to successful exit deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-navy-900 text-white shadow-lg'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatePresence mode="wait">
              {filteredStudies.map((study, i) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-3xl p-8 sm:p-12 border border-transparent hover:border-navy-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-navy-900 text-gold-500 rounded-full text-xs font-bold uppercase tracking-widest">
                      {study.category}
                    </span>
                    <Award className="w-8 h-8 text-gold-400 opacity-50" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-800 mb-6 group cursor-pointer flex items-center gap-2">
                    {study.title} <ArrowUpRight className="w-6 h-6 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs font-bold text-gold-700 uppercase tracking-widest mb-3">The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed text-[0.95rem]">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gold-700 uppercase tracking-widest mb-3">Our Strategic Approach</h4>
                      <p className="text-gray-600 leading-relaxed text-[0.95rem]">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gold-700 uppercase tracking-widest mb-3">The Outcome</h4>
                      <p className="text-gray-600 leading-relaxed text-[0.95rem]">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-navy-100 grid grid-cols-3 gap-4">
                    {Object.entries(study.stats).map(([label, value]) => (
                      <div key={label} className="text-center sm:text-left">
                        <div className="text-xs text-gray-400 capitalize mb-1">{label}</div>
                        <div className="text-lg font-heading font-bold text-navy-900">{value}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTASection
        title="Thinking About Scaling or Fundraising?"
        subtitle="Let's build your success story together. Our London-based solicitors are ready to assist with your next milestone."
      />
    </>
  )
}
