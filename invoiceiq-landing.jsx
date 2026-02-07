import React, { useState } from "react";

export default function InvoiceIQLanding() {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6W4LG73RC6"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6W4LG73RC6');
      `}</script>

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-6 mb-6">
            <svg width="80" height="80" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 md:w-40 md:h-40">
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
            <span className="text-5xl md:text-8xl font-bold">InvoiceIQ</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Stop Paying Blindly.<br />Validate Every Invoice With Confidence.</h1>
          <p className="text-lg md:text-2xl mb-6">
            InvoiceIQ is an intelligent invoice validation platform for importers and finance teams.<br />
            It uses 3-way matching (Invoice, PO, GRN) to detect errors, overpayments, and compliance issues — before payment is approved.
          </p>
          <ul className="text-base md:text-lg mb-8 space-y-2">
            <li>Built for importers & AP teams</li>
            <li>Designed for real trade workflows</li>
            <li>Catches risk before money leaves your business</li>
          </ul>
          <button
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100"
            onClick={() => setShowDemo(true)}
          >
            Book Demo
          </button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Manual Invoice Reviews Create Invisible Risk</h2>
          <ul className="list-disc pl-6 mb-4 text-lg">
            <li>Small invoice errors lead to big financial losses</li>
            <li>PO and GRN mismatches go unnoticed</li>
            <li>Wrong HS codes cause customs delays and penalties</li>
            <li>Overpayments are discovered too late</li>
            <li>No clear explanation of why an invoice is risky</li>
          </ul>
          <div className="text-amber-600 font-semibold mb-4">
            Most tools just store invoices. InvoiceIQ actually validates them.
          </div>
        </div>
      </section>

      {/* CORE VALUE SECTION */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Everything Importers Need to Validate Invoices in One Place</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">3-Way Invoice Matching (Core Feature)</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Price variances</li>
              <li>Quantity mismatches</li>
              <li>Overbilling</li>
              <li>Unauthorized charges</li>
            </ul>
            <p className="mb-2">Clear comparisons. No manual cross-checking.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Intelligent Invoice Validation</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Line-item math</li>
              <li>Totals & tax accuracy</li>
              <li>Pricing consistency</li>
              <li>Duplicate items</li>
              <li>Policy violations</li>
            </ul>
            <p className="mb-2">Each issue is clearly explained, not just flagged.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">HS Code Memory & Compliance</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Warns when the same product appears with a different code</li>
              <li>Reduces customs risk</li>
              <li>Improves classification consistency</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Risk Scoring & Explainable Decisions</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Decision: PASS / REVIEW / HOLD</li>
              <li>Risk score</li>
              <li>Maximum overpayment exposure</li>
              <li>Detailed validation report</li>
            </ul>
            <p>No black boxes. You always know why.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Structured Invoice Intake (Secondary Feature)</h3>
            <ul className="list-disc pl-6 mb-2">
              <li>Create or manually enter invoices only when needed, using a structured format that ensures:</li>
              <li>Clean validation</li>
              <li>Accurate comparisons</li>
              <li>Consistent reporting</li>
            </ul>
            <p>Creation supports validation not the other way around.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">From Invoice Receipt to Decision in Minutes</h2>
          <ol className="list-decimal pl-6 text-lg mb-6 space-y-2">
            <li>Receive or upload invoice<br /><span className="text-base">Upload supplier invoice along with PO and GRN</span></li>
            <li>Automatic 3-way validation<br /><span className="text-base">InvoiceIQ checks pricing, quantities, HS codes, and compliance</span></li>
            <li>Review risks & decision<br /><span className="text-base">Instant HOLD / REVIEW / PASS with clear explanations</span></li>
            <li>Download report & track history<br /><span className="text-base">Generate validation reports and analyze supplier behavior</span></li>
          </ol>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE INVOICEIQ */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Teams Choose InvoiceIQ</h2>
          <ul className="list-disc pl-6 text-lg mb-6 space-y-2">
            <li>Prevent overpayments before approval</li>
            <li>Eliminate manual PO-GRN-invoice matching</li>
            <li>Improve customs accuracy and audit readiness</li>
            <li>Reduce invoice review time dramatically</li>
            <li>Get clear, explainable validation reports</li>
            <li>Track invoice risk across suppliers and time</li>
          </ul>
          <p className="font-semibold text-xl">Traditional tools create invoices.<br />InvoiceIQ protects your money.</p>
        </div>
      </section>

      {/* SEE INVOICEIQ IN ACTION */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">See InvoiceIQ In Action</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow mb-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="font-bold text-lg">Decision:</span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded">HOLD</span>
              <span className="font-bold text-lg">Risk Level:</span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded">LOW</span>
              <span className="font-bold text-lg">Overpayment Risk:</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded">$64.00</span>
            </div>
            <ul className="list-disc pl-6 text-lg">
              <li>Line-item math mismatch</li>
              <li>PO vs invoice price variance</li>
              <li>GRN quantity mismatch</li>
              <li>HS code inconsistency</li>
            </ul>
            <p className="mt-4 font-semibold">Clear findings. Clear action.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-600 text-white py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Invoices Shouldn’t Be a Risk.</h2>
          <p className="text-lg mb-6">
            InvoiceIQ helps importers approve invoices with clarity, control, and confidence.
          </p>
          <button
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100"
            onClick={() => setShowDemo(true)}
          >
            Book Demo
          </button>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Contact Me</h3>
            <p className="mb-1">Get in touch to learn more about InvoiceIQ</p>
            <div className="flex flex-col items-center space-y-2">
              <span>📧 devgothi09@gmail.com</span>
              <span>📞 +1 (343) 558-3217</span>
            </div>
          </div>
        </div>
      </section>

      {/* Book Demo Modal */}
      {showDemo && (
        <DemoModal onClose={() => setShowDemo(false)} />
      )}
    </>
  );
}

function DemoModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/mwkzqjwv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => setSubmitted(true));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Book a Demo</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold text-center">
            Thank you! We'll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border rounded px-3 py-2"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border rounded px-3 py-2"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full border rounded px-3 py-2"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              required
              className="w-full border rounded px-3 py-2"
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              required
              className="w-full border rounded px-3 py-2"
              value={form.time}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 w-full"
            >
              Book Demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
