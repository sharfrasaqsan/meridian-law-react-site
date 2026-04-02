import { Scale, FileText, Shield, Building2 } from 'lucide-react'

export const services = [
  {
    id: 'startup-legal',
    icon: Scale,
    title: 'Startup & Venture Finance',
    shortDescription: 'From UK incorporation to SEIS/EIS seed rounds and Series B — we manage the legal foundation for high-growth ventures.',
    description: 'We guide founders through the complexities of UK company formation, founder equity (Shareholders\' Agreements), and EMI option schemes. Our team specializes in venture finance, helping you navigate SAFE/ASAs, convertible loans, and equity funding rounds compliant with UK laws.',
    benefits: [
      'UK Company Incorporation (Companies House)',
      'Shareholders\' Agreements & Articles of Association',
      'SEIS/EIS Advance Assurance & Compliance',
      'EMI Share Option Schemes for UK Employees',
    ],
    useCase: 'A London-based fintech trio needed to incorporate, draft custom Articles of Association, and secure SEIS/EIS advance assurance before their first pre-seed raise. We finalized their legal suite in 10 working days, ensuring they were investment-ready for their Tech City pitch.',
  },
  {
    id: 'contract-drafting',
    icon: FileText,
    title: 'Commercial Contracts',
    shortDescription: 'Precise, enforceable UK-governed agreements tailored to protect your technology and commercial scale.',
    description: 'Contracts are the lifeblood of your operation. We draft, review, and negotiate agreements under English Law that protect your intellectual property while minimizing friction. Our focus is on clarity and speed, ensuring your sales team closes deals faster.',
    benefits: [
      'SaaS Master Services Agreements (MSA)',
      'Software Licensing & EULA (English Law)',
      'Service Level Agreements (SLA)',
      'Non-Disclosure Agreements (NDA) & MOUs',
    ],
    useCase: 'A growth-stage SaaS platform required a standardized MSA to handle a 300% increase in enterprise client onboarding. We restructured their contract framework to reduce negotiation overhead, cutting legal review time from weeks to days.',
  },
  {
    id: 'intellectual-property',
    icon: Shield,
    title: 'IP & Patent Strategy',
    shortDescription: 'Secure your brand and proprietary tech with strategic UK and International IP protection.',
    description: 'In the tech world, your IP is your primary moat. We help UK companies identify, register, and protect trademarks, copyright, and trade secrets. We work closely with technical teams to ensure IP assignments are watertight from day one.',
    benefits: [
      'UK & European Trademark Registrations',
      'Copyright Protection for Source Code',
      'Trade Secret Policies & IP Assignments',
      'IP Audits for Series A/B Due Diligence',
    ],
    useCase: 'A deep-tech AI startup needed to protect its proprietary neural networks before a strategic partnership with a FTSE 100 firm. We implemented robust IP assignment protocols and trade secret policies, shielding their core assets throughout the due diligence process.',
  },
  {
    id: 'business-compliance',
    icon: Building2,
    title: 'UK GDPR & Regulatory',
    shortDescription: 'Navigate the UK Data Protection Act and industry regulations without stalling your product roadmap.',
    description: 'Regulatory compliance shouldn\'t be a bottleneck. We build pragmatic compliance frameworks for UK and EU markets, covering data privacy, financial regulation (FCA boundary advice), and employment law (UK Employment Rights).',
    benefits: [
      'UK GDPR Audits & Compliance Frameworks',
      'Privacy Policies & Data Processing Agreements (DPA)',
      'FCA Regulatory Boundary Advice (Tech/Pay)',
      'UK Employment Law & Workplace Policies',
    ],
    useCase: 'An e-health startup expanding from London into the EU required full UK GDPR and EU compliance. We conducted a data mapping exercise and drafted custom DPAs, enabling their launch two weeks ahead of their strategic partnership deadline.',
  },
]
