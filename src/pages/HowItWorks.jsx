import React from 'react';

const HowItWorks = () => {
  return (
    <div className="page-container how-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">How It Works</div>
          <h1 className="inner-title">From zero to<br />optimised in minutes.</h1>
          <p className="inner-sub">YesCoach is designed to get out of your way. Setup takes 3 minutes. Everything after that is automatic.</p>
        </div>
        <div className="timeline">
          <div className="tl-item reveal"><div className="tl-num">01</div><div className="tl-content"><h3>Tell us your goals</h3><p>In plain language — "I want to build muscle and run a 5K in 3 months." YesCoach parses your intent and builds a structured goal model with timelines, categories, and progression milestones. No forms to fill. Just talk.</p><div className="tl-tags"><span className="tl-tag">Natural language</span><span className="tl-tag">Goal extraction</span><span className="tl-tag">Timeline planning</span></div></div></div>
          <div className="tl-item reveal"><div className="tl-num">02</div><div className="tl-content"><h3>Connect your body data</h3><p>Link Oura Ring, Apple Health, WHOOP, Garmin or Strava. YesCoach reads your HRV, resting heart rate, sleep quality, body temperature variation, and activity history. The more you connect, the smarter it gets.</p><div className="tl-tags"><span className="tl-tag">Oura Ring</span><span className="tl-tag">Apple Health</span><span className="tl-tag">WHOOP</span><span className="tl-tag">Garmin</span><span className="tl-tag">Strava</span></div></div></div>
          <div className="tl-item reveal"><div className="tl-num">03</div><div className="tl-content"><h3>Receive your personalised plan</h3><p>Your first training block is generated immediately — built around your experience level, injuries, available equipment, preferred session duration, and biometric baseline. Every exercise includes detailed instructions and coaching cues.</p><div className="tl-tags"><span className="tl-tag">Personalised programming</span><span className="tl-tag">Injury-aware</span><span className="tl-tag">Equipment-matched</span></div></div></div>
          <div className="tl-item reveal"><div className="tl-num">04</div><div className="tl-content"><h3>Train — and let it adapt</h3><p>Every morning, YesCoach reads your overnight data. If recovery is low, volume drops automatically. If you're surging, it pushes harder. If you skip a session, it redistributes intelligently. You just show up — it handles the programming.</p><div className="tl-tags"><span className="tl-tag">Daily auto-adjustment</span><span className="tl-tag">Progressive overload</span><span className="tl-tag">Load management</span></div></div></div>
          <div className="tl-item reveal"><div className="tl-num">05</div><div className="tl-content"><h3>Log, chat, evolve</h3><p>After each session, tell the AI how it went. Hit a PR? Shoulder got tight? Felt energised? Each conversation updates your profile and sharpens the next recommendation. The longer you use it, the more personalised it becomes.</p><div className="tl-tags"><span className="tl-tag">Continuous learning</span><span className="tl-tag">Feedback loop</span><span className="tl-tag">Long-term optimisation</span></div></div></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
