import { motion } from "motion/react";
import { 
  Zap, 
  BarChart3, 
  Layers, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Search,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

import { Magnetic } from "../components/Magnetic";

export const ProductsPage = () => {
  const products = [
    {
      icon: Cpu,
      title: "AI Automation Systems",
      desc: "End-to-end autonomous agents that handle communication, qualification, and scheduling without human intervention.",
      status: "Available Now",
      features: ["WhatsApp Agents", "Voice AI", "Email Nurturing"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Tools",
      desc: "Advanced analytics platforms that predict lead behavior and optimize conversion paths using proprietary ML models.",
      status: "Enterprise Only",
      features: ["Predictive Analytics", "ROI Tracking", "Market Intelligence"]
    },
    {
      icon: Globe,
      title: "Future SaaS Platforms",
      desc: "The next generation of business operating systems. A unified interface for the autonomous era.",
      status: "In Development",
      features: ["Autonomous CRM", "AI Workforce Manager", "Global Sync"]
    },
    {
      icon: Layers,
      title: "Digital AI Products",
      desc: "Specialized AI assets and micro-services designed to plug directly into existing enterprise stacks.",
      status: "Coming Soon",
      features: ["API Connectors", "Custom LLM Nodes", "Edge AI"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">Product Ecosystem</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Building the <span className="text-white opacity-40">Infrastructure</span> of Tomorrow</h1>
            <p className="text-xl text-slate-400 font-light">
              FenX AI is more than an automation provider. We are architecting the software layer for the autonomous business era.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover group glass p-10 rounded-[2.5rem] relative overflow-hidden border-white/5"
              data-cursor-text="Details"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 group-hover:border-white/30 transition-colors">
                  {product.status}
                </span>
              </div>

              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <product.icon className="w-7 h-7" />
              </div>

              <h2 className="text-3xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-500">{product.title}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                {product.desc}
              </p>

              <div className="space-y-3 mb-10">
                {product.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-300 font-light">
                    <ShieldCheck className="w-4 h-4 text-white/40" />
                    {feat}
                  </div>
                ))}
              </div>

              <Magnetic strength={0.2}>
                <Link to="/book-demo" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 glass p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 blur-3xl -z-10" />
          <h3 className="text-3xl font-bold mb-4">Search FenX AI Ecosystem</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Access our documentation, API references, and product roadmaps in the developer portal.</p>
          <div className="max-w-md mx-auto relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:border-white transition-colors"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
