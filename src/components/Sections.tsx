import { motion, useScroll, useTransform } from "motion/react";
import { 
  MessageSquare, 
  PhoneCall, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  Building2,
  Stethoscope,
  GraduationCap,
  Car,
  Briefcase,
  Play,
  TrendingUp,
  Globe,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";
import { Magnetic } from "./Magnetic";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Animated Neural/Grid Pattern */}
        <motion.div 
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />

        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Autonomous Era Has Arrived
            </div>
            
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]">
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    AI Automation For Business
                  </motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.span 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-white opacity-40"
                  >
                    Autonomous Sales Systems
                  </motion.span>
                </div>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              FenX AI is a global WhatsApp automation company and AI calling platform. We build autonomous business systems that capture, qualify, and convert leads 24/7.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Magnetic strength={0.2}>
                <Link to="/book-demo" className="cta-button group w-full sm:w-auto px-12 py-6 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2 relative overflow-hidden">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-white/20 pointer-events-none"
                  />
                  <span className="relative z-10">Book Demo</span> 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </Link>
              </Magnetic>
              
              <Magnetic strength={0.2}>
                <Link to="/services" className="w-full sm:w-auto px-12 py-6 glass text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 fill-current" /> See How It Works
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const TrustStrip = () => {
  const industries = [
    { icon: Building2, name: "Real Estate" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: Car, name: "Automotive" },
    { icon: Briefcase, name: "Enterprises" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-y border-white/5 bg-white/[0.01]"
    >
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Global AI Infrastructure | Serving USA • Dubai • India • UK • Singapore</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity">
          {industries.map((ind, idx) => (
            <Magnetic key={idx} strength={0.1}>
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default">
                <ind.icon className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-tight">{ind.name}</span>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProblemSection = () => {
  const pains = [
    { icon: Clock, title: "Missed Enquiries", desc: "Leads go cold when you don't respond within the first 5 minutes." },
    { icon: Database, title: "Dead Lead Databases", desc: "Thousands of dollars sitting in your CRM with zero follow-up." },
    { icon: Zap, title: "Slow Response Time", desc: "Manual handling creates bottlenecks that kill conversion rates." },
    { icon: Users, title: "Manual Follow-ups", desc: "Your sales team spends 70% of their time chasing, not closing." },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Businesses Don’t Lack Leads. <br /><span className="text-slate-500">They Lack Intelligent Follow-Up.</span></h2>
          <p className="text-xl text-slate-400 font-light">Inefficient systems are leaking revenue every single day. We plug the holes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 glass rounded-3xl border-white/5 group hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <pain.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-500">{pain.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors">{pain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolutionsSection = () => {
  const solutions = [
    { 
      icon: MessageSquare, 
      title: "WhatsApp AI Automation", 
      desc: "Instant replies & engagement. Our AI handles the first 10 minutes of conversation perfectly.",
      tag: "Most Popular"
    },
    { 
      icon: PhoneCall, 
      title: "AI Outbound Calling", 
      desc: "Re-engage thousands of leads automatically with natural-sounding AI voice agents.",
      tag: "Scale Ready"
    },
    { 
      icon: Zap, 
      title: "Lead Revival System", 
      desc: "Turn old databases into new buyers. We breathe life into leads you thought were dead.",
      tag: "High ROI"
    },
    { 
      icon: ShieldCheck, 
      title: "Customer Qualification AI", 
      desc: "Sales teams talk only to serious buyers. Our AI filters out the window shoppers.",
      tag: "Efficiency"
    },
    { 
      icon: TrendingUp, 
      title: "Workflow Automation", 
      desc: "Operations handled autonomously. Connect your entire business stack into one engine.",
      tag: "Core"
    },
  ];

  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-white font-bold tracking-widest uppercase text-[10px] mb-4 block">The Ecosystem</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Intelligent Systems <br />For <span className="text-white">Infinite Growth</span></h2>
          </div>
          <Link to="/services" className="group flex items-center gap-2 text-white font-bold hover:text-slate-300 transition-all">
            Explore all solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="service-card group p-10 glass rounded-[2.5rem] border-white/5 transition-all duration-700 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-lg">
                  <sol.icon className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1 rounded-full group-hover:border-white/30 transition-colors">{sol.tag}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:translate-x-1 transition-transform duration-500">{sol.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light mb-8 relative z-10 group-hover:text-slate-300 transition-colors">{sol.desc}</p>
              
              <div className="w-full h-px bg-white/5 mb-8 relative z-10" />
              
              <Link to="/book-demo" className="text-sm font-bold flex items-center gap-2 group-hover:text-white transition-colors relative z-10">
                Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Lead", desc: "Capture from any source." },
    { number: "02", title: "AI Engages", desc: "Instant multi-channel outreach." },
    { number: "03", title: "Qualification", desc: "Deep intent analysis." },
    { number: "04", title: "Sales Ready", desc: "Handover to your team." },
    { number: "05", title: "Revenue", desc: "Closed deals at scale." },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Path to Automation</h2>
          <p className="text-xl text-slate-400 font-light">A seamless flow from first contact to closed deal.</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <Magnetic strength={0.2}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-3xl glass border-white/20 flex items-center justify-center mb-6 text-2xl font-bold text-white group-hover:bg-white group-hover:text-black transition-all duration-500"
                >
                  {step.number}
                </motion.div>
              </Magnetic>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm font-light max-w-[150px]">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="lg:hidden w-px h-12 bg-white/10 my-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Results = () => {
  const metrics = [
    { value: "24/7", label: "Response System", desc: "Never miss a lead again." },
    { value: "350%", label: "Faster Conversions", desc: "Speed to lead is everything." },
    { value: "60%", label: "Reduced Staff Load", desc: "Automate the repetitive." },
    { value: "4.2x", label: "Higher Lead ROI", desc: "Extract more from your spend." },
  ];

  return (
    <section className="py-32 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter">{m.value}</div>
              <div className="text-lg font-bold mb-2">{m.label}</div>
              <p className="text-slate-500 text-sm font-light">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FounderSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] -z-10" />
          <div className="flex flex-col md:flex-row items-center gap-16">
            <Magnetic strength={0.1}>
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-slate-800 flex-shrink-0 overflow-hidden border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src="https://picsum.photos/seed/shashank/400/400" alt="Shashank Thamali - Founder of FenX AI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </Magnetic>
            <div>
              <h4 className="text-white font-bold tracking-widest uppercase text-[10px] mb-6 block">Founded by Shashank Thamali</h4>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight italic leading-tight">
                "Building intelligent systems that transform how businesses operate, communicate, and scale through artificial intelligence."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-white" />
                <div>
                  <div className="text-xl font-bold">Shashank Thamali</div>
                  <div className="text-slate-500 font-light">Founder & CEO, FenX AI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const VisionSection = () => {
  const roadmap = [
    { title: "Automation Services", desc: "Current focus on bespoke enterprise automation." },
    { title: "SaaS Platforms", desc: "Scaling our proprietary tools into global products." },
    { title: "Digital AI Products", desc: "Plug-and-play AI assets for every industry." },
    { title: "Intelligent Physical Systems", desc: "Bridging AI with the physical operational world." },
  ];

  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Building The Future Of <br /><span className="text-white">Autonomous Businesses</span></h2>
          <p className="text-xl text-slate-400 font-light">FenX AI is not just an agency. We are a technology company building the long-term roadmap for business intelligence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 group-hover:text-white/10 transition-colors">0{idx + 1}</div>
              <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DemoSection = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">See FenX AI In Action</h2>
          <p className="text-xl text-slate-400 font-light">Watch how our systems handle real-world business scenarios.</p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto aspect-video glass rounded-[3rem] border-white/5 flex items-center justify-center group cursor-pointer relative overflow-hidden"
        >
          <img src="https://picsum.photos/seed/demo/1280/720" alt="Demo Preview" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          <Magnetic strength={0.3}>
            <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-200 transition-all duration-500 relative z-10">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 -z-10" />
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight leading-[0.9]">Let Automation Work <br />While You Sleep.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.2}>
              <Link to="/book-demo" className="cta-button w-full sm:w-auto px-12 py-6 bg-white text-black font-bold rounded-full text-lg hover:bg-slate-200 transition-all shadow-2xl shadow-white/10">
                Schedule Demo
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link to="/services" className="w-full sm:w-auto px-12 py-6 glass text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all">
                Start Automation
              </Link>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
