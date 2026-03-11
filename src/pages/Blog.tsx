import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

export const blogPosts = [
  {
    id: 'how-ai-automation-increases-sales',
    title: 'How AI Automation Increases Sales by 300%',
    excerpt: 'Discover the exact framework we use to triple sales conversions using autonomous AI systems and instant follow-ups.',
    author: 'Shashank Thamali',
    date: 'Feb 24, 2026',
    category: 'Sales Strategy',
    image: 'https://picsum.photos/seed/sales/800/600'
  },
  {
    id: 'whatsapp-automation-for-real-estate',
    title: 'WhatsApp Automation: The Secret Weapon for Real Estate',
    excerpt: 'Why top real estate agencies are moving away from manual follow-ups to autonomous WhatsApp AI systems.',
    author: 'Shashank Thamali',
    date: 'Feb 20, 2026',
    category: 'Real Estate',
    image: 'https://picsum.photos/seed/realestate/800/600'
  },
  {
    id: 'ai-calling-vs-human-calling',
    title: 'AI Calling vs. Human Calling: Which Wins in 2026?',
    excerpt: 'A deep dive into the performance metrics of AI voice agents versus traditional human sales teams.',
    author: 'Shashank Thamali',
    date: 'Feb 15, 2026',
    category: 'Technology',
    image: 'https://picsum.photos/seed/tech/800/600'
  }
];

export const BlogPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title="Blog | AI Automation Insights & Strategies" 
        description="Learn how to scale your business with the latest AI automation strategies, WhatsApp marketing tips, and autonomous sales systems."
      />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-white font-bold tracking-widest uppercase text-sm mb-4 block">Our Insights</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">The <span className="text-white opacity-40">Autonomous</span> Blog</h1>
          <p className="text-xl text-slate-400 font-light">
            Expert insights on AI automation, SaaS growth, and the future of business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-white/5 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</div>
                  <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{post.title}</h2>
                <p className="text-slate-400 font-light mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "FenX AI"
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        schema={schema}
        ogType="article"
      />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-[10px]">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Blog
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="px-3 py-1 glass rounded-full text-white">{post.category}</span>
            <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</div>
            <div className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-12 tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="aspect-video rounded-[3rem] overflow-hidden mb-16 border border-white/5">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none font-light text-slate-300 leading-relaxed">
            <p className="text-xl text-white font-medium mb-8">{post.excerpt}</p>
            <p>
              In the rapidly evolving landscape of 2026, business automation has moved beyond simple scripts to truly autonomous systems. 
              At FenX AI, we've seen firsthand how these systems can transform a business from a manual, slow-moving entity into a high-speed growth engine.
            </p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Power of Instant Response</h2>
            <p>
              The data is clear: lead conversion drops by over 80% if you don't respond within the first 5 minutes. 
              Autonomous AI systems solve this problem by providing instant, intelligent engagement on the platforms your customers use most, like WhatsApp.
            </p>
            <div className="my-12 p-8 glass rounded-3xl border-white/10 italic text-xl text-white">
              "The future of business isn't just about AI; it's about autonomous infrastructure that works while you sleep."
            </div>
            <p>
              Whether it's real estate, healthcare, or e-commerce, the principles of autonomous growth remain the same: 
              capture intent instantly, qualify with intelligence, and automate the follow-up until the deal is closed.
            </p>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/5">
            <h3 className="text-2xl font-bold mb-8">Ready to implement this for your business?</h3>
            <Link to="/book-demo" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Book a Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
