import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Meridian Law Group's privacy policy, detailing how we collect, use, and protect your personal data in compliance with the UK Data Protection Act and UK GDPR."
      />
      
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            badge="Legal"
            title="Privacy Policy"
            subtitle="Last updated: March 2024"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-gray max-w-none prose-headings:font-heading prose-headings:text-navy-800 prose-a:text-navy-600"
          >
            <h2>1. Introduction</h2>
            <p>
              Meridian Law Group ("we," "our," or "the Firm") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share personal data in the course of our legal practice, through our website, and otherwise in the operation of our business, in accordance with the UK Data Protection Act 2018 and the UK GDPR.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              Meridian Law Group is a data controller responsible for your personal data. If you have any questions about this Privacy Policy, please contact us at <strong>privacy@meridianlaw.co.uk</strong>.
            </p>

            <h2>3. The Data We Collect</h2>
            <p>
              In providing legal services and operating our website, we collect several types of personal data:
            </p>
            <ul>
              <li><strong>Contact Data:</strong> Your name, email address, postal address, and contact numbers.</li>
              <li><strong>Identity Data:</strong> Documents required for KYC (Know Your Customer) and AML (Anti-Money Laundering) checks.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and location data when you use our website.</li>
              <li><strong>Client Data:</strong> Information provided by our clients or on their behalf in the course of our providing legal services.</li>
            </ul>

            <h2>4. How We Use Your Data</h2>
            <p>
              We use your data for several lawful purposes, including:
            </p>
            <ul>
              <li>To provide legal advice and services.</li>
              <li>To comply with regulatory obligations (e.g., AML/KYC checks).</li>
              <li>To communicate with you regarding your matters or inquiries.</li>
              <li>To improve our website (using anonymized data).</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We employ industry-standard security measures, including encryption and secure server infrastructure, to protect your data from unauthorized access, loss, or theft.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to access your data, request corrections, request erasure, or object to certain processing. To exercise these rights, please contact our data protection representative.
            </p>

            <h2>7. Updates to This Policy</h2>
            <p>
              We may update this policy periodically to reflect changes in legal requirements or our data practices. The date of the most recent update is noted at the top of this page.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
