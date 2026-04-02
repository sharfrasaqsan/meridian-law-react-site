import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Service" 
        description="Terms of use for the Meridian Law Group website and our digital assets. Governed by English Law."
      />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            badge="Legal"
            title="Terms of Service"
            subtitle="Last updated: March 2024"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-gray max-w-none prose-headings:font-heading prose-headings:text-navy-800 prose-a:text-navy-600"
          >
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of Meridian Law Group ("the Website"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website.
            </p>

            <h2>2. No Solicitor-Client Relationship</h2>
            <p>
              The information on this Website is for general informational purposes only and does not constitute legal advice. Your use of this Website or communication with the Firm via the Website or email does not create a solicitor-client relationship. Such a relationship is only established through a formal Letter of Engagement signed by the Firm.
            </p>

            <h2>3. Professional Regulation</h2>
            <p>
              Meridian Law Group is a trading name for some legal entity (placeholder). We are authorized and regulated by the Solicitors Regulation Authority (SRA) under SRA number: [NUMBER]. Our professional rules can be found in the SRA Standards and Regulations.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this Website, including text, logos, designs, and images, is the property of Meridian Law Group or its licensors and is protected by UK and international copyright laws.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Meridian Law Group shall not be liable for any direct, indirect, or consequential loss or damage arising from your use of the Website or reliance on any information contained herein.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions regarding these terms, please contact us at <strong>legal@meridianlaw.co.uk</strong>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
