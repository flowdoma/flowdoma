"use client";
import Link from "next/link";

const stats = [
  { value: "10+", label: "Digital Products" },
  { value: "500+", label: "AI Prompts" },
  { value: "24/7", label: "Automation Running" },
  { value: "100%", label: "No-Code Solutions" },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.603-1.358 2.603H4.156c-1.387 0-2.358-1.603-1.358-2.603L4.2 15.3"/>
      </svg>
    ),
    title: "AI Prompt Libraries",
    desc: "Hundreds of battle-tested prompts for ChatGPT & Claude, organized by business use case so you get results immediately.",
    tag: "Digital Products",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
      </svg>
    ),
    title: "Automation Templates",
    desc: "Pre-built Make.com and Zapier workflows you import in one click. Lead capture, CRM sync, social posting — all automated.",
    tag: "Automation",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"/>
      </svg>
    ),
    title: "Notion Workspaces",
    desc: "Complete business operating systems in Notion — client CRM, project tracker, content calendar, income dashboard.",
    tag: "Templates",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
    title: "GHL & CRM Systems",
    desc: "Full GoHighLevel setup, white-label CRM, and done-for-you automation systems for small businesses ready to scale.",
    tag: "Services",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
      </svg>
    ),
    title: "Courses & Training",
    desc: "Step-by-step video courses teaching you to use AI and automation tools to run your business 10x faster.",
    tag: "Education",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/>
      </svg>
    ),
    title: "Website & Web Services",
    desc: "Professional WordPress sites, landing pages, SEO audits, and AI chatbot integrations for businesses ready for an online presence.",
    tag: "Web Services",
  },
];

const products = [
  {
    id: 1,
    name: "Freelancer Business OS",
    desc: "Complete Notion workspace — CRM, invoices, time tracker, income dashboard.",
    price: "$29",
    tag: "Notion Template",
    color: "from-[#00E5FF]/10 to-transparent",
    border: "border-[#00E5FF]/20",
  },
  {
    id: 2,
    name: "Business Automation Starter Kit",
    desc: "PDF + templates showing you how to automate email, social, invoices, and leads.",
    price: "$37",
    tag: "PDF Guide",
    color: "from-[#7B61FF]/10 to-transparent",
    border: "border-[#7B61FF]/20",
  },
  {
    id: 3,
    name: "ChatGPT & Claude Mega Library",
    desc: "500+ prompts across marketing, sales, HR, content creation, SEO, and more.",
    price: "$47",
    tag: "Prompt Pack",
    color: "from-[#00E5FF]/10 to-transparent",
    border: "border-[#00E5FF]/20",
  },
];

const tools = [
  "Make.com", "Zapier", "Notion", "GoHighLevel", "ChatGPT", "Claude AI",
  "Canva", "Beehiiv", "Airtable", "WordPress", "Gumroad", "ConvertKit",
  "Make.com", "Zapier", "Notion", "GoHighLevel", "ChatGPT", "Claude AI",
  "Canva", "Beehiiv", "Airtable", "WordPress", "Gumroad", "ConvertKit",
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 hero-glow grid-bg overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF]/5 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay: '3s'}} />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0E1420] border border-[#1A2235] rounded-full px-4 py-2 mb-8 animate-on-load">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-xs font-mono text-[#8896A7] tracking-widest uppercase">AI + Automation for Modern Business</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl font-800 leading-[1.05] tracking-tight mb-6 animate-on-load delay-100">
              <span className="gradient-text-warm">Automate the work.</span>
              <br />
              <span className="gradient-text">Grow the business.</span>
            </h1>

            <p className="text-[#8896A7] text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-on-load delay-200">
              Flowdoma gives small business owners, freelancers, and creators the AI tools, automation templates, and systems they need to grow — without hiring a team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-load delay-300">
              <Link href="/products" className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center gap-2 justify-center">
                <span>Explore Products</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-ghost px-8 py-4 rounded-xl text-base inline-flex items-center gap-2 justify-center">
                Get a Free Audit
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-on-load delay-400">
              {stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="font-display text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-[#8896A7] text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-[#1A2235] bg-[#0E1420]/50 py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {tools.map((tool, i) => (
            <span key={i} className="text-[#4A5568] text-sm font-mono tracking-widest uppercase flex items-center gap-12">
              {tool}
              <span className="text-[#1A2235]">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text-warm mb-4">
            Everything you need to run<br />a smarter business
          </h2>
          <p className="text-[#8896A7] max-w-xl mx-auto">
            From AI prompt libraries to full automation systems — Flowdoma has the tools and templates to save you hours every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="card-hover bg-[#0E1420] border border-[#1A2235] rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-[#7B61FF]/10 border border-[#1A2235] flex items-center justify-center text-[#00E5FF] mb-5 group-hover:border-[#00E5FF]/30 transition-all">
                {f.icon}
              </div>
              <span className="text-xs font-mono text-[#7B61FF] tracking-wider uppercase mb-3 block">{f.tag}</span>
              <h3 className="font-display font-semibold text-lg text-[#E2E8F0] mb-2">{f.title}</h3>
              <p className="text-[#8896A7] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#0E1420]/30 border-y border-[#1A2235]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-3">Featured Products</p>
              <h2 className="font-display text-4xl font-bold gradient-text-warm">
                Start with these
              </h2>
            </div>
            <Link href="/products" className="btn-ghost px-5 py-2.5 rounded-lg text-sm hidden md:block">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className={`card-hover border ${p.border} rounded-2xl overflow-hidden`}>
                <div className={`h-36 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                  <span className="text-4xl opacity-30">⚡</span>
                </div>
                <div className="p-6 bg-[#0E1420]">
                  <span className="text-xs font-mono text-[#7B61FF] tracking-wider uppercase mb-2 block">{p.tag}</span>
                  <h3 className="font-display font-semibold text-[#E2E8F0] mb-2">{p.name}</h3>
                  <p className="text-[#8896A7] text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xl gradient-text">{p.price}</span>
                    <Link href="/products" className="btn-ghost px-4 py-2 rounded-lg text-xs">
                      Get it →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link href="/products" className="btn-ghost px-6 py-3 rounded-lg text-sm inline-block">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="animated-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 via-transparent to-[#7B61FF]/5 rounded-3xl" />
          <div className="relative z-10">
            <p className="text-[#00E5FF] font-mono text-xs tracking-widest uppercase mb-4">Free Consultation</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text-warm mb-4">
              Not sure where to start?
            </h2>
            <p className="text-[#8896A7] max-w-lg mx-auto mb-8 leading-relaxed">
              Book a free 60-minute automation audit. We'll review your current tools and workflows, identify what can be automated, and give you a clear action plan.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center gap-2">
              <span>Book Free Audit</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
