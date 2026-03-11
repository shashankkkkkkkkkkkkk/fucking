import { 
  Hero, 
  TrustStrip,
  ProblemSection, 
  SolutionsSection, 
  HowItWorks, 
  Results, 
  FounderSection, 
  VisionSection,
  DemoSection,
  FinalCTA 
} from "../components/Sections";
import { SEO, defaultSchema } from "../components/SEO";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Globe, ShieldCheck, Zap, Database, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      q: "How does FenX AI automation improve business sales?",
      a: "FenX AI uses autonomous systems to engage leads instantly via WhatsApp and AI calling, ensuring zero lead leakage and 24/7 follow-up, which typically triples conversion rates."
    },
    {
      q: "Is the AI calling system natural sounding?",
      a: "Yes, our AI voice agents use advanced neural text-to-speech and natural language processing to handle complex conversations with human-like empathy and clarity."
    },
    {
      q: "Can I integrate FenX AI with my existing CRM?",
      a: "Absolutely. FenX AI is built to be the software layer for your business, connecting seamlessly with Salesforce, HubSpot, GoHighLevel, and custom databases."
    },
    {
      q: "What industries do you specialize in?",
      a: "We provide specialized AI automation for Real Estate, Healthcare, E-commerce, and Education, with custom workflows for each sector."
    }
  ];

  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tight">Frequently Asked <span className="text-white opacity-40">Questions</span></h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl border-white/5"
              >
                <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustryGrid = () => {
  const industries = [
    { id: 'real-estate-ai', name: 'Real Estate', icon: Globe },
    { id: 'healthcare-ai', name: 'Healthcare', icon: ShieldCheck },
    { id: 'ecommerce-ai', name: 'E-commerce', icon: Zap },
    { id: 'education-ai', name: 'Education', icon: Database }
  ];

  return (
    <section className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Built for Every <span className="text-white opacity-40">Industry</span></h2>
          <p className="text-xl text-slate-400 font-light">Specialized autonomous systems tailored for your specific business sector.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind) => (
            <Link key={ind.id} to={`/industries/${ind.id}`}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] border-white/5 h-full flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ind.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{ind.name}</h3>
                <p className="text-slate-500 text-sm font-light mb-6">Explore specialized AI automation for {ind.name}.</p>
                <div className="mt-auto flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomePage = () => {
  return (
    <main>
      <SEO 
        title="FenX AI | Global AI Automation & Autonomous Business Systems"
        description="FenX AI is a global leader in autonomous business automation. We build AI calling, WhatsApp automation, and lead reactivation systems for enterprise growth."
        schema={defaultSchema}
      />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <IndustryGrid />
      <SolutionsSection />
      <HowItWorks />
      <Results />
      <FounderSection />
      <VisionSection />
      <DemoSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
};
