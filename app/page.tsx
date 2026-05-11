"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Workflow,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center font-bold text-lg">
              F
            </div>

            <div>
              <h1 className="font-semibold text-lg">FlowDoma</h1>
              <p className="text-xs text-zinc-400">
                AI Automation Agency
              </p>
            </div>
          </div>

          <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
            Book a Call
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 mb-8">
              <Zap className="w-4 h-4" />
              AI Systems Built For Modern Businesses
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Automate Your
              <span className="block text-zinc-400">
                Entire Business
              </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-8 text-lg text-zinc-400 leading-relaxed">
              We build intelligent AI automation systems that save
              time, reduce costs, and scale your operations —
              without hiring more staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <button className="px-7 py-4 rounded-2xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bot className="w-7 h-7" />}
              title="AI Agents"
              description="Custom AI agents that handle support, lead generation, outreach, and repetitive tasks automatically."
            />

            <FeatureCard
              icon={<Workflow className="w-7 h-7" />}
              title="Automation Workflows"
              description="We connect your tools and automate operations using modern AI infrastructure."
            />

            <FeatureCard
              icon={<ShieldCheck className="w-7 h-7" />}
              title="Scalable Systems"
              description="Enterprise-grade systems designed to grow with your business."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready To Scale Faster?
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              FlowDoma helps businesses implement AI systems that
              actually produce measurable ROI.
            </p>

            <button className="mt-10 px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
