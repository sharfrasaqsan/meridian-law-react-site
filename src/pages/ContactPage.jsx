import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const officeDetails = [
  {
    icon: MapPin,
    title: 'London Office',
    content: '12 Cabot Square, Canary Wharf, London E14 4QQ, UK',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Telephone',
    content: '020 7456 7890',
    link: 'tel:+442074567890',
  },
  {
    icon: Mail,
    title: 'General Inquiries',
    content: 'legal@meridianlaw.co.uk',
    link: 'mailto:legal@meridianlaw.co.uk',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon – Fri: 09:00 – 18:00 GMT',
  },
]

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Meridian Law Group's London office. Expert startup and technology legal advice for UK innovators. Book a consultation today."
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
              Connect With <span className="text-gold-400">Our Experts</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed">
              We operate at the speed of scaling startups. Reach out for an initial consultation or 
              specific legal inquiries regarding UK technology law.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-10">
              <SectionHeading
                badge="Location"
                title="London Headquarters"
                subtitle="Strategically located in Canary Wharf to serve the UK's financial and technology hubs."
                align="left"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {officeDetails.map((detail, i) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="p-3 bg-navy-50 rounded-lg">
                      <detail.icon className="w-6 h-6 text-navy-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{detail.title}</h3>
                      {detail.link ? (
                        <a href={detail.link} className="text-navy-600 hover:text-gold-600 transition-colors text-sm break-words">
                          {detail.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{detail.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="p-6 bg-navy-900 rounded-xl text-white flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-gold-500 shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-gold-400 leading-none mb-2">Confidential & Secure</h4>
                  <p className="text-xs text-navy-200">
                    All communications are governed by solicitor-client privilege under English Law.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 sm:p-12 border border-gray-100">
                <div className="mb-10 text-center sm:text-left">
                  <h3 className="text-2xl font-heading font-bold text-navy-800 mb-2">Send Us a Message</h3>
                  <p className="text-gray-600">Complete the form below and one of our solicitors will contact you within one business day.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
