import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'

export default function Disclaimer() {
  return (
    <>
      <SEO 
        title="Legal Disclaimer" 
        description="Important legal disclaimer regarding the information provided on the Meridian Law Group website."
      />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            badge="Legal"
            title="Disclaimer"
            subtitle="Please read carefully"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-gray max-w-none prose-headings:font-heading prose-headings:text-navy-800"
          >
            <h2>General Information, Not Legal Advice</h2>
            <p>
              The materials on the Meridian Law Group website have been prepared by for informational purposes only and are not legal advice. This information is not intended to create, and receipt of it does not constitute, a solicitor-client relationship. Internet subscribers and online readers should not act upon this information without seeking professional counsel.
            </p>

            <h2>No Guarantee of Results</h2>
            <p>
              Our case studies and descriptions of previous matters are for illustrative purposes and reflect results obtained in specific circumstances. We do not guarantee that similar results can be obtained in every matter, as every case involves unique facts and legal challenges.
            </p>

            <h2>Attorney Advertising</h2>
            <p>
              In certain jurisdictions, this Website may be considered attorney advertising. Prior results do not guarantee a similar outcome.
            </p>

            <h2>Links to Third-Party Resources</h2>
            <p>
              Third-party resources that can be accessed with hypertext links from this Website are not under the control of the Firm, and the Firm is not responsible for the contents of any of these third-party resources. The third-party links on this Website are provided for your convenience only.
            </p>

            <h2>Changes</h2>
            <p>
              Information on this Website may be changed, updated, or removed without notice.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
