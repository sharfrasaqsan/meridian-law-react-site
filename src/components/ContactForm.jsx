import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ])

      if (error) throw error

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err.message || 'Something went wrong. Please try again or contact us directly.'
      )
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-heading font-semibold text-green-800 mb-2">
          Message Received
        </h3>
        <p className="text-green-700 text-sm">
          Thank you for reaching out. A member of our team will respond within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-800">Unable to send message</p>
            <p className="text-xs text-red-600 mt-1">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow placeholder:text-gray-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your legal matter or question..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-shadow resize-none placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Your information is confidential and protected by attorney-client privilege.
      </p>
    </form>
  )
}
