import { motion } from "motion/react";
import { MessageSquare, PhoneCall, Zap, ShieldCheck, Database, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Magnetic } from "../components/Magnetic";
import { SEO, softwareSchema } from "../components/SEO";

export const ServicesPage = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "WhatsApp AI Automation",
      problem: "Customers expect instant replies. If you wait 10 minutes, they've already messaged your competitor.",
      solution: "Our AI-powered WhatsApp systems engage leads instantly, answer FAQs, and book appointments directly in your calendar.",
      outcome: "90% reduction in response time and 24/7 availability without hiring more staff.",
      roi: "Average 3.5x increase in lead-to-meeting conversion rates."
    },
    {
      icon: PhoneCall,
      title: "AI Outbound Calling",
      problem: "Cold calling is dead, and manual follow-up calling is slow and inconsistent.",
      solution: "Intelligent AI voice agents that can handle thousands of concurrent calls to qualify leads and confirm bookings.",
      outcome: "Scale your outreach infinitely and ensure every lead is called within seconds of opting in.",
      roi: "Reduce cost per qualified lead by up to 70% compared to human callers."
    },
    {
      icon: Zap,
      title: "Lead Revival System",
      problem: "Your old database is a goldmine of 'lost' revenue that nobody is touching.",
      solution: "We deploy 'Lead Revival' campaigns that use AI to re-engage old prospects with personalized, high-intent messages.",
      outcome: "Turn 'dead' leads into fresh sales opportunities without spending a dollar on new ads.",
      roi: "Unlock hidden revenue from existing assets with zero additional ad spend."
    },
    {
      icon: ShieldCheck,
      title: "Customer Qualification AI",
      problem: "Sales teams talk only to serious buyers. Our AI filters out the window shoppers.",
      solution: "Advanced intent analysis that scores leads based on real-time interactions and data points.",
      outcome: "Sales teams focus 100% of their time on high-intent ready buyers.",
      roi: "40% increase in sales team productivity and morale."
    },
    {
      icon: TrendingUp,
      title: "Workflow Automation",
      problem: "Operations handled autonomously. Connect your entire business stack into one engine.",
      solution: "Bespoke end-to-end automation workflows tailored to your specific sales process.",
      outcome: "A truly autonomous business engine that works exactly how you need it to.",
      roi: "Eliminate manual data entry and human error across the entire organization."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="AI Automation Services | WhatsApp & AI Calling Solutions"
        description="Explore our enterprise AI automation services. From autonomous WhatsApp engagement to AI outbound calling and lead reactivation systems."
        schema={softwareSchema}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">Enterprise Solutions</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Autonomous <span className="text-white opacity-40">Infrastructure</span></h1>
            <p className="text-xl text-slate-400 font-light">
              We build the software layer for the autonomous era. From instant engagement to complex workflow orchestration.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover group glass p-8 md:p-12 rounded-[2.5rem] grid grid-cols-1 lg:grid-cols-3 gap-12 border-white/5 relative overflow-hidden"
              data-cursor-text="Service"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="lg:col-span-1 relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">{service.title}</h2>
                <Magnetic strength={0.2}>
                  <Link to="/book-demo" className="group inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="group/item">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 group-hover/item:text-white transition-colors">The Problem</h4>
                  <p className="text-slate-400 leading-relaxed font-light group-hover/item:text-slate-300 transition-colors">{service.problem}</p>
                </div>
                <div className="group/item">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 group-hover/item:text-white transition-colors">FenX Solution</h4>
                  <p className="text-slate-400 leading-relaxed font-light group-hover/item:text-slate-300 transition-colors">{service.solution}</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/[0.07] transition-colors">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Business Outcome</h4>
                  <p className="text-slate-200 font-medium text-sm">{service.outcome}</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10 group-hover:bg-white/[0.15] transition-colors">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-4">ROI Impact</h4>
                  <p className="text-white font-bold text-sm">{service.roi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to automate your growth?</h3>
          <Link to="/book-demo" className="px-10 py-5 bg-gradient-brand text-black font-bold rounded-xl text-lg hover:scale-105 transition-transform">
            Book Your Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
};
