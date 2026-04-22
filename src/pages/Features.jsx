import React from 'react';

const Features = () => {
  return (
    <div className="page-container features-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">Product</div>
          <h1 className="inner-title">Every feature your<br />body needs.</h1>
          <p className="inner-sub">YesCoach goes beyond tracking. It understands your biology and makes intelligent decisions so you don't have to.</p>
        </div>
        <div className="feat-big-grid">
          <div className="feat-big-card reveal"><span className="feat-big-icon">🤖</span><h3>Conversational AI Coach</h3><p>Ask anything, report anything. The AI understands natural language and converts your words into structured training decisions instantly.</p><ul className="feat-list"><li>Real-time plan adjustments</li><li>Injury and soreness logging</li><li>Goal setting via conversation</li><li>Contextual workout suggestions</li></ul></div>
          <div className="feat-big-card reveal reveal-delay-1"><span className="feat-big-icon">💓</span><h3>HRV & Biometric Integration</h3><p>Connects with Oura Ring, WHOOP, Garmin, Apple Health and more. Your recovery score drives every training decision automatically.</p><ul className="feat-list"><li>Oura Ring, WHOOP, Garmin sync</li><li>Daily readiness scoring</li><li>Auto volume adjustment</li><li>7-day HRV trend analysis</li></ul></div>
          <div className="feat-big-card reveal"><span className="feat-big-icon">📅</span><h3>Dynamic Schedule Engine</h3><p>A living training calendar that reshuffles intelligently when life gets in the way — travel, illness, missed sessions — without losing your progress arc.</p><ul className="feat-list"><li>Intelligent session rescheduling</li><li>Horizontal date-wheel navigation</li><li>Rest day optimisation</li><li>Weekly load balancing</li></ul></div>
          <div className="feat-big-card reveal reveal-delay-1"><span className="feat-big-icon">📊</span><h3>Progress & PR Tracking</h3><p>Pin the metrics that matter. Watch your PRs climb, body composition shift, and consistency score stay green — all visualised automatically.</p><ul className="feat-list"><li>Pinned metric cards</li><li>PR history timeline</li><li>Weekly bar chart analysis</li><li>Body composition trends</li></ul></div>
          <div className="feat-big-card reveal"><span className="feat-big-icon">🧬</span><h3>Biomarker Intelligence</h3><p>Upload your lab results and the AI reads them. Testosterone, Vitamin D, cortisol, ferritin — all factored into your training and recovery recommendations.</p><ul className="feat-list"><li>Lab result upload</li><li>Deficiency-aware recommendations</li><li>Supplement suggestions</li><li>Trend tracking over time</li></ul></div>
          <div className="feat-big-card reveal reveal-delay-1"><span className="feat-big-icon">🧊</span><h3>Recovery Logging</h3><p>12 selectable recovery activities — cold plunge, sauna, mobility, meditation and more. Log with a tap. The AI factors them into tomorrow's plan.</p><ul className="feat-list"><li>12 activity types</li><li>One-tap logging</li><li>Weekly recovery summary</li><li>Plan integration</li></ul></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
