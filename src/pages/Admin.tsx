import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Database, Clock, User, Building, Mail, Phone, MessageSquare, BarChart3 } from "lucide-react";

interface Lead {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  lead_volume: string;
  message: string;
  source: string;
  created_at: string;
}

export const AdminDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/leads")
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-slate-400">Manage and track incoming business leads.</p>
          </div>
          <div className="glass px-6 py-3 rounded-xl flex items-center gap-3">
            <Database className="text-white w-5 h-5" />
            <span className="font-bold">{leads.length} Total Leads</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {leads.map((lead) => (
              <motion.div 
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-8"
              >
                <div className="col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{lead.name}</h3>
                      <p className="text-sm text-slate-400">{lead.company}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-white/10 rounded text-[10px] uppercase tracking-wider text-slate-300">
                        Source: {lead.source || 'Unknown'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    {new Date(lead.created_at).toLocaleString()}
                  </div>
                </div>

                <div className="col-span-1 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{lead.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{lead.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Building className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">{lead.industry}</span>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="flex items-center gap-3 text-sm mb-3">
                    <BarChart3 className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-300">Volume: {lead.lead_volume}</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg text-xs text-slate-400">
                    <MessageSquare className="w-3 h-3 mb-1 inline mr-2" />
                    {lead.message || "No message provided."}
                  </div>
                </div>

                <div className="col-span-1 flex items-center justify-end">
                  <button className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors">
                    Mark Contacted
                  </button>
                </div>
              </motion.div>
            ))}

            {leads.length === 0 && (
              <div className="text-center py-20 glass rounded-3xl">
                <p className="text-slate-400">No leads captured yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
