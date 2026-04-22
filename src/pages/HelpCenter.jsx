import React, { useState } from 'react';

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      q: "How does the AI know when to adjust my plan?",
      a: "Every morning, YesCoach reads your overnight HRV, sleep quality, resting heart rate and body temperature from connected devices. If recovery metrics are below your personal baseline, the AI automatically reduces session volume or intensity for that day. You can also trigger adjustments manually by telling the AI how you feel in the chat."
    },
    {
      q: "Which wearables and apps are supported?",
      a: "Currently supported: Oura Ring, Apple Health, Garmin Connect, Strava, and WHOOP. MyFitnessPal, Polar, and Polar H10 integrations are coming in Q2 2026. You can also manually log any metrics the AI doesn't have access to."
    },
    {
      q: "Is my health data safe and private?",
      a: "Yes. Your biometric data is encrypted in transit and at rest. We never sell your data to third parties. You can export or delete all your data at any time from the app settings. See our full Privacy Policy for details."
    },
    {
      q: "Can I use YesCoach without a wearable?",
      a: "Absolutely. The AI uses your daily check-ins (energy, mood, soreness) to make adjustments if you don't have a wearable. You get a great experience — connecting a device like Oura Ring just makes the recommendations significantly more precise."
    },
    {
      q: "How is YesCoach different from other fitness apps?",
      a: "Most fitness apps give you a static program. YesCoach is a live system — it reads your biology every day, adapts in real time, and gets smarter the longer you use it. You can also have natural conversations with it like you would a real coach, and it logs everything you say into structured data automatically."
    }
  ];

  return (
    <div className="page-container help-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">Help Center</div>
          <h1 className="inner-title">How can we<br />help you?</h1>
        </div>
        <div className="help-search reveal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          <input type="text" placeholder="Search for answers…" />
        </div>
        <div className="help-cats reveal">
          <div className="help-cat"><div className="help-cat-icon">📱</div><h3>Getting Started</h3><p>Set up your account, connect devices and get your first plan.</p></div>
          <div className="help-cat"><div className="help-cat-icon">💓</div><h3>Biometric Sync</h3><p>Connecting Oura, WHOOP, Apple Health and other devices.</p></div>
          <div className="help-cat"><div className="help-cat-icon">🤖</div><h3>AI Coach</h3><p>How to talk to your coach and get the best responses.</p></div>
          <div className="help-cat"><div className="help-cat-icon">📊</div><h3>Progress Tracking</h3><p>Logging workouts, metrics and understanding your data.</p></div>
          <div className="help-cat"><div className="help-cat-icon">💳</div><h3>Billing</h3><p>Subscription management, receipts and plan changes.</p></div>
          <div className="help-cat"><div className="help-cat-icon">🔒</div><h3>Privacy & Data</h3><p>How your data is stored, used and protected.</p></div>
        </div>
        <div className="section-label" style={{marginBottom: '24px'}}>Frequently Asked Questions</div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <div className={"faq-item " + (openIndex === index ? 'open' : '')} key={index}>
              <div className="faq-q" onClick={() => toggleFaq(index)}>
                <span>{faq.q}</span>
                <span className="arrow">▾</span>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
