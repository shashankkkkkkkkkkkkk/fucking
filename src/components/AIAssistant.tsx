import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: greeting, 1: name, 2: business, 3: volume, 4: phone, 5: finished
  const [leadData, setLeadData] = useState({
    name: '',
    businessType: '',
    monthlyLeads: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi 👋 I'm FenX AI. I help businesses automate leads, calls and WhatsApp conversations. How can I help?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Automatically start qualification after greeting if user interacts or after a small delay
  useEffect(() => {
    if (isOpen && step === 0 && messages.length === 1) {
      const timer = setTimeout(() => {
        const botMsg: Message = {
          id: '2',
          text: "To get started, what's your name?",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botMsg]);
        setStep(1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, step, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || step === 5 || isSubmitting) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    let nextStep = step;
    let nextBotMsg = "";

    if (step === 1) {
      setLeadData(prev => ({ ...prev, name: currentInput }));
      nextBotMsg = `Nice to meet you, ${currentInput}! What type of business do you run?`;
      nextStep = 2;
    } else if (step === 2) {
      setLeadData(prev => ({ ...prev, businessType: currentInput }));
      nextBotMsg = "Got it. Approximately how many leads do you receive per month?";
      nextStep = 3;
    } else if (step === 3) {
      setLeadData(prev => ({ ...prev, monthlyLeads: currentInput }));
      nextBotMsg = "Almost done! What's the best phone number to contact you?";
      nextStep = 4;
    } else if (step === 4) {
      const finalData = { ...leadData, phone: currentInput, source: 'assistant' };
      setLeadData(finalData);
      setIsSubmitting(true);
      
      try {
        const response = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalData)
        });
        
        if (response.ok) {
          nextBotMsg = "✅ Thanks — FenX AI team will contact you shortly.";
          nextStep = 5;
        } else {
          nextBotMsg = "Something went wrong, but I've saved your details. We'll reach out soon!";
          nextStep = 5;
        }
      } catch (error) {
        nextBotMsg = "✅ Thanks — FenX AI team will contact you shortly.";
        nextStep = 5;
      } finally {
        setIsSubmitting(false);
      }
    }

    if (nextBotMsg) {
      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: nextBotMsg,
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setStep(nextStep);
      }, 800);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center shadow-2xl z-50 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageSquare className="w-8 h-8" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-primary rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] glass border border-white/10 rounded-[2.5rem] shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Bot className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white">FenX AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'bot' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.sender === 'bot' ? 'bg-white/10 text-white' : 'bg-white text-black'
                    }`}>
                      {msg.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'bot' 
                        ? 'bg-white/5 text-slate-300 rounded-tl-none' 
                        : 'bg-white/10 text-white rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02]">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={step === 5 ? "Conversation finished" : "Type your message..."}
                  disabled={step === 5 || isSubmitting}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/20 transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || step === 5 || isSubmitting}
                  className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[10px] text-slate-600 text-center mt-4 uppercase tracking-widest font-bold">
                Powered by FenX Autonomous Engine
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
