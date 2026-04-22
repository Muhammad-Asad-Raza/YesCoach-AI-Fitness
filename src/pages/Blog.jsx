import React from 'react';

const Blog = () => {
  return (
    <div className="page-container blog-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">Blog</div>
          <h1 className="inner-title">Insights on training,<br />recovery & AI.</h1>
        </div>
        <div className="blog-grid">
          <div className="blog-card reveal">
            <div className="blog-thumb" style={{background: 'rgba(0,200,117,.06)'}}>💓</div>
            <div className="blog-body">
              <div className="blog-tag">Recovery</div>
              <div className="blog-title">Why HRV Is the Most Important Number in Your Training</div>
              <div className="blog-excerpt">Heart rate variability isn't just a wearable gimmick. Here's the science behind why it should drive every training decision you make.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Mar 6, 2026</span><span className="blog-read">8 min read →</span></div>
          </div>
          <div className="blog-card reveal reveal-delay-1">
            <div className="blog-thumb" style={{background: 'rgba(59,130,246,.06)'}}>🧠</div>
            <div className="blog-body">
              <div className="blog-tag">AI & Coaching</div>
              <div className="blog-title">How AI Can Replace a $500/Month Personal Trainer</div>
              <div className="blog-excerpt">We built an AI that reads biomarkers, adjusts to life events, and coaches in natural language. Here's how it stacks up against human coaches.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Feb 28, 2026</span><span className="blog-read">12 min read →</span></div>
          </div>
          <div className="blog-card reveal reveal-delay-2">
            <div className="blog-thumb" style={{background: 'rgba(139,92,246,.06)'}}>🏋️</div>
            <div className="blog-body">
              <div className="blog-tag">Strength</div>
              <div className="blog-title">The Case for Auto-Regulation in Strength Training</div>
              <div className="blog-excerpt">Fixed percentages ignore the single most important variable: how you feel today. Here's why auto-regulation produces better results.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Feb 20, 2026</span><span className="blog-read">10 min read →</span></div>
          </div>
          <div className="blog-card reveal">
            <div className="blog-thumb" style={{background: 'rgba(245,158,11,.06)'}}>😴</div>
            <div className="blog-body">
              <div className="blog-tag">Sleep</div>
              <div className="blog-title">Sleep Is Your Most Underrated Performance Variable</div>
              <div className="blog-excerpt">Chronic under-recovery is sabotaging your gains more than any training mistake. The data from 2M+ YesCoach sessions proves it.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Feb 12, 2026</span><span className="blog-read">7 min read →</span></div>
          </div>
          <div className="blog-card reveal reveal-delay-1">
            <div className="blog-thumb" style={{background: 'rgba(0,200,117,.06)'}}>🧬</div>
            <div className="blog-body">
              <div className="blog-tag">Biomarkers</div>
              <div className="blog-title">Your Vitamin D Is Probably Killing Your Strength Gains</div>
              <div className="blog-excerpt">Over 60% of YesCoach users who upload lab results show suboptimal Vitamin D. Here's what that means for performance.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Feb 5, 2026</span><span className="blog-read">9 min read →</span></div>
          </div>
          <div className="blog-card reveal reveal-delay-2">
            <div className="blog-thumb" style={{background: 'rgba(255,107,107,.06)'}}>⚡</div>
            <div className="blog-body">
              <div className="blog-tag">HIIT</div>
              <div className="blog-title">When HIIT Is Hurting You (And When It Helps)</div>
              <div className="blog-excerpt">High-intensity training is powerful — and frequently abused. YesCoach's AI knows exactly when to deploy it and when to hold back.</div>
            </div>
            <div className="blog-footer"><span className="blog-date">Jan 28, 2026</span><span className="blog-read">11 min read →</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
