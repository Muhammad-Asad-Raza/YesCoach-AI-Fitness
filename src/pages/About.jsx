import React from 'react';

const About = () => {
  return (
    <div className="page-container about-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">About</div>
          <h1 className="inner-title">We believe everyone<br />deserves a great coach.</h1>
          <p className="inner-sub">YesCoach was built by athletes and engineers who were tired of generic plans, bad advice, and apps that couldn't tell the difference between a tired body and a weak mindset.</p>
        </div>
        <div className="about-grid reveal">
          <div>
            <h2 className="section-title" style={{fontSize: '36px'}}>Our mission</h2>
            <p style={{fontSize: '16px', color: 'var(--text2)', lineHeight: '1.8', marginBottom: '20px'}}>Elite-level coaching used to be reserved for professional athletes with the budget to match. We're changing that. YesCoach puts a world-class, data-driven coach in the pocket of every athlete — from weekend runners to competitive powerlifters.</p>
            <p style={{fontSize: '16px', color: 'var(--text2)', lineHeight: '1.8'}}>We're not building a workout app. We're building a system that learns your biology, understands your life, and makes you better — automatically.</p>
          </div>
          <div style={{background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '28px', padding: '40px'}}>
            <div style={{fontSize: '14px', fontWeight: '700', color: 'var(--text3)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px'}}>Founded on principles</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--g)', flexShrink: '0', marginTop: '6px'}}></div>
                <p style={{fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6'}}><strong style={{color: 'var(--text)'}}>Biology first.</strong> Every plan decision is rooted in your actual body data — not averages, not assumptions.</p>
              </div>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--g)', flexShrink: '0', marginTop: '6px'}}></div>
                <p style={{fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6'}}><strong style={{color: 'var(--text)'}}>Radical personalisation.</strong> Two people with identical goals should get two completely different plans.</p>
              </div>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'var(--g)', flexShrink: '0', marginTop: '6px'}}></div>
                <p style={{fontSize: '14px', color: 'var(--text2)', lineHeight: '1.6'}}><strong style={{color: 'var(--text)'}}>Zero friction.</strong> The AI handles programming complexity. You just show up and train.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stat-grid reveal">
          <div className="about-stat"><div className="av">50K+</div><div className="al">Athletes training with YesCoach worldwide</div></div>
          <div className="about-stat"><div className="av">2M+</div><div className="al">Workouts logged and analysed to date</div></div>
          <div className="about-stat"><div className="av">4.9★</div><div className="al">Average App Store rating from 12,000+ reviews</div></div>
          <div className="about-stat"><div className="av">2026</div><div className="al">Founded — and already redefining personal training</div></div>
        </div>
        <div style={{marginTop: '80px'}} className="reveal">
          <div className="section-label">The Team</div>
          <h2 className="section-title" style={{fontSize: '40px'}}>Built by athletes,<br />for athletes.</h2>
          <div className="team-grid">
            <div className="team-card"><div className="team-avatar" style={{background: '#00C875'}}>H</div><div className="team-name">Hamza Shafique</div><div className="team-role">Founder & CEO · ex-Scriptio</div></div>
            <div className="team-card"><div className="team-avatar" style={{background: '#3B82F6'}}>A</div><div className="team-name">Aisha M.</div><div className="team-role">Head of AI · ex-Google DeepMind</div></div>
            <div className="team-card"><div className="team-avatar" style={{background: '#8B5CF6'}}>R</div><div className="team-name">Rayan K.</div><div className="team-role">Lead Engineer · ex-Strava</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
