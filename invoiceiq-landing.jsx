import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Shield, TrendingUp, Zap, AlertTriangle, BarChart3, FileCheck, Brain, ArrowRight, Play, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function InvoiceIQLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);

  const features = [
    {
      icon: <FileCheck className="w-7 h-7" />,
      title: "Smart Invoice Creation",
      description: "Create professional commercial invoices with proper structure, line items, taxes, shipping costs, Incoterms, and totals — built for real export and trade use cases, not generic billing."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Intelligent Invoice Validation",
      description: "InvoiceIQ automatically checks invoices for calculation errors, unusual charges, pricing inconsistencies, and policy violations — before approval or payment."
    },
    {
      icon: <Brain className="w-7 h-7" />,
      title: "HS Code Memory & Learning",
      description: "InvoiceIQ remembers HS codes used in past invoices and warns you when the same product appears with a different code — reducing customs risk and compliance issues."
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Risk Scoring & Analytics",
      description: "Every invoice receives a clear decision (PASS / REVIEW / HOLD), a risk score, and overpayment exposure — plus dashboards that show spend trends and supplier behavior."
    }
  ];

  const howItWorks = [
    { step: "01", title: "Create or receive an invoice", description: "Import or build invoices with all necessary trade documentation" },
    { step: "02", title: "InvoiceIQ validates automatically", description: "Instant checks on totals, HS codes, and compliance rules" },
    { step: "03", title: "See risks instantly", description: "Clear warnings, approval status, and risk scores" },
    { step: "04", title: "Export & analyze", description: "Generate reports and discover spending patterns" }
  ];

  const whyChoose = [
    "Prevent costly invoice mistakes before payment",
    "Reduce overpayments and financial leakage",
    "Improve customs accuracy and HS code consistency",
    "Save hours of manual review time",
    "Gain real visibility into invoice and supplier data"
  ];

  const painPoints = [
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Small invoice errors lead to big financial losses" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Wrong HS codes cause customs delays and penalties" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Overpayments go unnoticed until it's too late" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "No visibility into where money is really going" }
  ];

  return (
    <div className="min-h-screen bg-black font-['Sora',sans-serif] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-border {
          position: relative;
          background: #0a0a0a;
          border-radius: 16px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 2px;
          background: linear-gradient(135deg, #0ea5e9, #3b82f6, #6366f1);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .glow-effect {
          box-shadow: 0 0 60px rgba(59, 130, 246, 0.3);
        }

        .mesh-gradient-dark {
          background: 
            radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.08) 0px, transparent 50%);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }

        .section-visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .trust-badge {
          backdrop-filter: blur(10px);
          background: rgba(15, 15, 15, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden mesh-gradient-dark">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="fade-in-up stagger-1 mb-12">
              <div className="inline-flex items-center justify-center gap-4 md:gap-6 flex-col md:flex-row">
                <svg width="80" height="80" md-width="160" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-40 md:h-40">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                      <stop offset="50%" style={{stopColor: '#06b6d4'}} />
                      <stop offset="100%" style={{stopColor: '#0ea5e9'}} />
                    </linearGradient>
                  </defs>
                  <rect x="100" y="80" width="180" height="240" rx="15" fill="url(#logoGradient)" opacity="0.9"/>
                  <path d="M140 130 L160 150 L200 110" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M140 180 L160 200 L200 160" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="220" y="100" width="20" height="180" rx="2" fill="#1e293b" opacity="0.3"/>
                  <rect x="250" y="120" width="20" height="160" rx="2" fill="#1e293b" opacity="0.3"/>
                  <path d="M 280 140 Q 320 100, 360 140 Q 400 180, 360 220 Q 320 260, 280 220 Q 240 180, 280 140 Z" fill="url(#logoGradient)" opacity="0.95"/>
                  <path d="M310 170 L330 190 L370 150" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <h1 className="text-5xl md:text-8xl font-bold gradient-text text-center md:text-left">InvoiceIQ</h1>
              </div>
            </div>

            {/* Headline */}
            <h2 className="fade-in-up stagger-2 text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Stop Guessing.<br/>
              <span className="gradient-text">Start Trusting</span> Your Invoices.
            </h2>

            {/* Subheadline */}
            <p className="fade-in-up stagger-3 text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
              InvoiceIQ is an intelligent invoice creation and validation platform that helps exporters and finance teams prevent errors, catch overpayments, and stay compliant — before money leaves the business.
            </p>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-4 flex flex-wrap justify-center gap-6 text-sm">
              <div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Built for exporters & AP teams</span>
              </div>
              <div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Designed for real trade workflows</span>
              </div>
              <div className="trust-badge px-6 py-3 rounded-full flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Reduces invoice risk before payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 floating-animation" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Problem Section */}
      <section 
        ref={el => sectionRefs.current['problem'] = el}
        id="problem"
        className="py-20 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible('problem') ? 'section-visible' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Manual Invoices Create <span className="text-red-400">Invisible Risk</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className={`${isVisible('problem') ? 'section-visible' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="p-6 bg-red-950 border-l-4 border-red-500 rounded-r-xl hover:bg-red-900 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-red-400 mt-1">{point.icon}</div>
                    <p className="text-slate-300 text-lg">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center ${isVisible('problem') ? 'section-visible stagger-5' : 'opacity-0'}`}>
            <p className="text-2xl font-semibold bg-gradient-to-r from-zinc-900 to-slate-900 py-6 px-8 rounded-2xl inline-block border border-slate-800">
              Most invoice tools only create PDFs. <span className="gradient-text">InvoiceIQ actually thinks.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={el => sectionRefs.current['features'] = el}
        id="features"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${isVisible('features') ? 'section-visible' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything Your Invoice Software Should Have — <span className="text-blue-400">and More</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`gradient-border card-hover p-8 ${isVisible('features') ? 'section-visible' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        ref={el => sectionRefs.current['how-it-works'] = el}
        id="how-it-works"
        className="py-20 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible('how-it-works') ? 'section-visible' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Invoice to <span className="gradient-text">Insight</span> in Minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div 
                key={index}
                className={`relative ${isVisible('how-it-works') ? 'section-visible' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="text-center">
                  <div className="inline-block mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 text-blue-600">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose InvoiceIQ Section */}
      <section 
        ref={el => sectionRefs.current['why-choose'] = el}
        id="why-choose"
        className="py-20 bg-black"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible('why-choose') ? 'section-visible' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Teams Choose InvoiceIQ
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {whyChoose.map((reason, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-6 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-all duration-300 border border-slate-800 ${isVisible('why-choose') ? 'section-visible' : 'opacity-0'} stagger-${index + 1}`}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-slate-300 pt-1">{reason}</p>
              </div>
            ))}
          </div>

          <div className={`text-center ${isVisible('why-choose') ? 'section-visible stagger-6' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-zinc-900 to-slate-900 border border-blue-500/30 py-8 px-12 rounded-2xl shadow-2xl">
              <p className="text-2xl font-semibold">
                Traditional tools create invoices.<br/>
                <span className="text-blue-400">InvoiceIQ protects your money.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section 
        ref={el => sectionRefs.current['demo'] = el}
        id="demo"
        className="py-20 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 ${isVisible('demo') ? 'section-visible' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See InvoiceIQ in <span className="text-blue-400">Action</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Create Invoice Mockup */}
            <div className={`bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-slate-800 ${isVisible('demo') ? 'section-visible' : 'opacity-0'} stagger-1`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 text-white">Create Invoice</h3>
                <div className="space-y-3 text-sm">
                  <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-700 rounded w-full"></div>
                  <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                  <div className="h-8 bg-blue-900 border-2 border-blue-500 rounded mt-6"></div>
                </div>
              </div>
            </div>

            {/* Validation Result Mockup */}
            <div className={`bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-slate-800 ${isVisible('demo') ? 'section-visible' : 'opacity-0'} stagger-2`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 text-white">Validation Result</h3>
                <div className="bg-red-950 border-2 border-red-500 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <span className="font-bold text-red-400">HOLD</span>
                  </div>
                  <div className="text-xs text-red-300">Risk Score: 8.2</div>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <div>• Price variance detected</div>
                  <div>• HS code mismatch</div>
                </div>
              </div>
            </div>

            {/* Analytics Dashboard Mockup */}
            <div className={`bg-zinc-900 rounded-2xl p-8 shadow-2xl border border-slate-800 ${isVisible('demo') ? 'section-visible' : 'opacity-0'} stagger-3`}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 text-white">Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Total Spend</div>
                    <div className="text-2xl font-bold text-blue-400">$847K</div>
                  </div>
                  <div className="h-24 bg-gradient-to-t from-blue-950 to-transparent rounded relative">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 ${isVisible('demo') ? 'section-visible stagger-4' : 'opacity-0'}`}>
            <p className="text-xl text-slate-400">
              A clean interface designed for clarity, not confusion.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl floating-animation"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Invoices Shouldn't Be a Risk.
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            Join teams who want clarity, control, and confidence in every invoice.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-slate-400 text-lg">Get in touch to learn more about InvoiceIQ</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="mailto:devgothi09@gmail.com" className="bg-zinc-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-400 hover:text-blue-400 transition-colors">devgothi09@gmail.com</p>
            </a>

            <a href="tel:+13435583217" className="bg-zinc-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-slate-400 hover:text-blue-400 transition-colors">+1 (343) 558-3217</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3b82f6'}} />
                    <stop offset="50%" style={{stopColor: '#06b6d4'}} />
                    <stop offset="100%" style={{stopColor: '#0ea5e9'}} />
                  </linearGradient>
                </defs>
                <rect x="100" y="80" width="180" height="240" rx="15" fill="url(#footerGradient)" opacity="0.9"/>
                <path d="M140 130 L160 150 L200 110" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M140 180 L160 200 L200 160" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M 280 140 Q 320 100, 360 140 Q 400 180, 360 220 Q 320 260, 280 220 Q 240 180, 280 140 Z" fill="url(#footerGradient)" opacity="0.95"/>
                <path d="M310 170 L330 190 L370 150" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <span className="text-2xl font-bold">InvoiceIQ</span>
            </div>
            <p className="text-slate-400 text-lg">
              Invoice intelligence for modern trade.
            </p>
            <p className="text-slate-600 text-sm mt-4">
              © 2026 InvoiceIQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
