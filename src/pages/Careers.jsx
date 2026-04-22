import React from 'react';

const Careers = () => {
  return (
    <div className="page-container careers-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">Careers</div>
          <h1 className="inner-title">Build the future<br />of human performance.</h1>
        </div>
        <p className="careers-hero-text reveal">We're a small, focused team building something that genuinely matters. We move fast, care deeply about craft, and believe that the best products come from people who use them obsessively.</p>
        <div className="section-label" style={{marginBottom: '24px'}}>Open Roles</div>
        <div className="job-list">
          <div className="job-card reveal"><div><div className="job-title">Senior AI Engineer</div><div className="job-meta"><span className="job-tag jt-dept">Engineering</span><span className="job-tag jt-type">Full-time</span><span className="job-tag jt-loc">Remote</span></div></div><button className="job-apply">Apply →</button></div>
          <div className="job-card reveal"><div><div className="job-title">iOS Developer</div><div className="job-meta"><span className="job-tag jt-dept">Mobile</span><span className="job-tag jt-type">Full-time</span><span className="job-tag jt-loc">Remote / Dubai</span></div></div><button className="job-apply">Apply →</button></div>
          <div className="job-card reveal"><div><div className="job-title">Product Designer</div><div className="job-meta"><span className="job-tag jt-dept">Design</span><span className="job-tag jt-type">Full-time</span><span className="job-tag jt-loc">Remote</span></div></div><button className="job-apply">Apply →</button></div>
          <div className="job-card reveal"><div><div className="job-title">Sports Science Advisor</div><div className="job-meta"><span className="job-tag jt-dept">Science</span><span className="job-tag jt-type">Part-time</span><span className="job-tag jt-loc">Flexible</span></div></div><button className="job-apply">Apply →</button></div>
          <div className="job-card reveal"><div><div className="job-title">Growth Marketing Lead</div><div className="job-meta"><span className="job-tag jt-dept">Marketing</span><span className="job-tag jt-type">Full-time</span><span className="job-tag jt-loc">Remote</span></div></div><button className="job-apply">Apply →</button></div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
