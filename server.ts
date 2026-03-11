import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { processLead } from "./server/services/leadService.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database("leads.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    company TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    industry TEXT NOT NULL,
    lead_volume TEXT NOT NULL,
    message TEXT,
    source TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Migration: Add source column if it doesn't exist
try {
  db.exec("ALTER TABLE leads ADD COLUMN source TEXT");
} catch (e) {
  // Column already exists or other error
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // SEO Routes
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain");
    res.send("User-agent: *\nAllow: /\nSitemap: https://fenx.ai/sitemap.xml");
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://fenx.ai/</loc><priority>1.0</priority></url>
  <url><loc>https://fenx.ai/services</loc><priority>0.8</priority></url>
  <url><loc>https://fenx.ai/products</loc><priority>0.8</priority></url>
  <url><loc>https://fenx.ai/book-demo</loc><priority>0.9</priority></url>
  <url><loc>https://fenx.ai/blog</loc><priority>0.7</priority></url>
  <url><loc>https://fenx.ai/industries/real-estate-ai</loc><priority>0.7</priority></url>
  <url><loc>https://fenx.ai/industries/healthcare-ai</loc><priority>0.7</priority></url>
  <url><loc>https://fenx.ai/industries/ecommerce-ai</loc><priority>0.7</priority></url>
  <url><loc>https://fenx.ai/industries/education-ai</loc><priority>0.7</priority></url>
</urlset>`);
  });

  // API Routes
  app.post("/api/lead", async (req, res) => {
    try {
      const result = await processLead(db, req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error("Lead processing error:", error);
      res.status(500).json({ error: "Failed to process lead" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      // Map old format to new format if necessary
      const data = {
        ...req.body,
        businessType: req.body.industry,
        monthlyLeads: req.body.lead_volume,
        source: req.body.source || 'contact-form'
      };
      const result = await processLead(db, data);
      res.status(201).json(result);
    } catch (error) {
      console.error("Lead processing error:", error);
      res.status(500).json({ error: "Failed to process lead" });
    }
  });

  app.get("/api/admin/leads", (req, res) => {
    try {
      const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch leads" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
