import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Users } from 'lucide-react';

const industryData: Record<string, any> = {
  'real-estate-ai': {
    title: 'AI Automation for Real Estate',
    description: 'Transform your real estate business with autonomous AI lead capture, instant WhatsApp follow-ups, and automated viewing bookings.',
    keywords: 'real estate automation AI, AI lead follow up system, property management AI',
    heroTitle: 'Sell Properties Faster with Autonomous AI',
    features: [
      'Instant WhatsApp lead qualification',
      'Automated viewing scheduling',
      '24/7 property inquiry handling',
      'Lead reactivation for old databases'
    ]
  },
  'healthcare-ai': {
    title: 'AI Automation for Healthcare',
    description: 'Streamline patient communication with HIPAA-compliant AI automation. Automated appointment reminders and patient inquiry handling.',
    keywords: 'healthcare AI automation, patient follow up AI, medical clinic automation',
    heroTitle: 'Patient-First Autonomous Healthcare Systems',
    features: [
      'Automated appointment booking',
      'Instant patient inquiry replies',
      'Follow-up care automation',
      'Insurance verification workflows'
    ]
  },
  'ecommerce-ai': {
    title: 'AI Automation for E-commerce',
    description: 'Recover abandoned carts and scale customer support with intelligent AI automation for your online store.',
    keywords: 'ecommerce AI automation, cart recovery AI, Shopify automation WhatsApp',
    heroTitle: 'Scale Your Store with Autonomous AI Sales',
    features: [
      'Abandoned cart recovery via WhatsApp',
      'Instant customer support AI',
      'Personalized product recommendations',
      'Automated order tracking updates'
    ]
  },
  'education-ai': {
    title: 'AI Automation for Education',
    description: 'Automate student recruitment and enrollment with intelligent AI systems designed for modern educational institutions.',
    keywords: 'education AI automation, student recruitment AI, school automation systems',
    heroTitle: 'The Future of Autonomous Education Management',
    features: [
      'Automated student lead qualification',
      'Instant course inquiry handling',
      'Enrollment workflow automation',
      'Parent communication systems'
    ]
  }
};

export const IndustryPage = () => {
  const { industryId } = useParams();
  const data = industryData[industryId || ''] || industryData['real-estate-ai'];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "FenX AI"
    },
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title={data.title} 
        description={data.description} 
        schema={schema}
      />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-20"
        >
          <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">Industry Solutions</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl">
            {data.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="glass p-12 rounded-[3rem] border-white/5">
            <h2 className="text-3xl font-bold mb-8">Why {data.title}?</h2>
            <div className="space-y-6">
              {data.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <p className="text-lg text-slate-300 font-light">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 glass rounded-3xl border-white/5">
                <Zap className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">90%</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">Faster Response</div>
              </div>
              <div className="p-8 glass rounded-3xl border-white/5">
                <TrendingUp className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">3.5x</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">Conversion Lift</div>
              </div>
              <div className="p-8 glass rounded-3xl border-white/5">
                <Users className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">Availability</div>
              </div>
              <div className="p-8 glass rounded-3xl border-white/5">
                <CheckCircle2 className="w-10 h-10 mb-4" />
                <div className="text-3xl font-bold mb-2">0</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">Human Error</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Ready to scale your {industryId?.split('-')[0]} business?</h2>
          <Link to="/book-demo" className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-bold rounded-full text-xl hover:scale-105 transition-transform">
            Get Started <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
