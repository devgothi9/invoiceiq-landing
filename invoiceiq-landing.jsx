import React, { useState } from "react";
import { Check, ArrowRight, Mail, Phone } from "lucide-react";

export default function InvoiceIQLanding() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="bg-black border-b border-gray-800 px-6 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="15" width="35" height="50" rx="3" fill="#3b82f6" opacity="0.8"/>
                <path d="M28 30 L32 36 L40 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M28 45 L32 51 L40 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <rect x="55" y="20" width="4" height="35" rx="1" fill="#1e293b" opacity="0.4"/>
                <rect x="65" y="25" width="4" height="30" rx="1" fill="#1e293b" opacity="0.4"/>
              </svg>
              <span className="text-2xl font-bold">InvoiceIQ</span>
            </div>
            <button
              onClick={() => setShowDemo(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition"
            >
              Book Demo
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Paying Blindly.<br />
              <span className="text-blue-500">Validate Every Invoice.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              InvoiceIQ uses intelligent 3-way matching (Invoice, PO, GRN) to catch errors, overpayments, and compliance issues before payment is approved.
            </p>
            <button
              onClick={() => setShowDemo(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold flex items-center gap-2 transition"
            >
              Book a Demo <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-6 py-20 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">The Problem</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-red-500">Manual Reviews Create Invisible Risk</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Invoice errors slip through undetected</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>PO and GRN mismatches go unnoticed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Overpayments discovered too late</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Compliance gaps leave you exposed</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded p-6 border border-gray-800">
                <p className="text-sm text-gray-400 mb-4">Average overpayment per invoice:</p>
                <p className="text-4xl font-bold text-red-500 mb-2">$240</p>
                <p className="text-sm text-gray-400">Without proper validation, errors compound quickly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="px-6 py-20 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">How InvoiceIQ Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded p-6 border border-gray-800">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Upload Invoice</h3>
                <p className="text-gray-400">Upload supplier invoice along with PO and GRN</p>
              </div>
              <div className="bg-gray-900 rounded p-6 border border-gray-800">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Instant Validation</h3>
                <p className="text-gray-400">InvoiceIQ validates pricing, quantities, and compliance automatically</p>
              </div>
              <div className="bg-gray-900 rounded p-6 border border-gray-800">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Get Decision</h3>
                <p className="text-gray-400">HOLD, REVIEW, or PASS with clear explanations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-20 border-b border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Why Teams Choose InvoiceIQ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "3-Way Matching (Invoice, PO, GRN)",
                "Line-Item Math Validation",
                "Price & Quantity Verification",
                "HS Code Consistency Checks",
                "Duplicate Detection",
                "Overpayment Risk Scoring",
                "Clear Decision Explanations",
                "Compliance Reports"
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <Check className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <section className="px-6 py-20 bg-gray-900 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Invoices Shouldn't Be a Risk</h2>
            <p className="text-xl text-gray-400 mb-8">
              InvoiceIQ helps importers approve invoices with clarity, control, and confidence.
            </p>
            <button
              onClick={() => setShowDemo(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold inline-flex items-center gap-2 transition mb-12"
            >
              Book Demo <ArrowRight size={20} />
            </button>

            <div className="border-t border-gray-800 pt-12">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500" size={24} />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-semibold">devgothi09@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-500" size={24} />
                  <div className="text-left">
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-semibold">+1 (343) 558-3217</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Book Demo Modal */}
      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
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
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mwkzqjwv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        console.log("Demo request sent successfully to devgothi09@gmail.com!");
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 rounded-lg p-8 shadow-xl max-w-md w-full border border-gray-800 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-3xl font-light"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-2 text-white">Book a Demo</h2>
        <p className="text-gray-400 mb-6">We'll send confirmation to your email</p>

        {submitted ? (
          <div className="bg-green-900 border border-green-700 rounded p-4 text-green-200 text-center">
            <p className="font-semibold mb-2">✓ Demo Booked!</p>
            <p className="text-sm">Confirmation email sent to {form.email} and devgothi09@gmail.com</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              value={form.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              value={form.time}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
            >
              Book Demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
