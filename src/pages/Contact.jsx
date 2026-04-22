import React from 'react';

const Contact = () => {
  return (
    <div className="page-container contact-page">
      <div className="inner-page">
        <div className="inner-hero reveal">
          <div className="section-label">Contact</div>
          <h1 className="inner-title">Let's talk.</h1>
          <p className="inner-sub">Got a question, partnership idea, or press enquiry? We read every message.</p>
        </div>
        <div className="contact-grid reveal">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p>We're a small team and we take support seriously. Expect a reply within 24 hours on weekdays.</p>
            <div className="contact-methods">
              <div className="contact-method"><div className="cm-icon">📧</div><div><div className="cm-label">Email</div><div className="cm-val">hello@yescoach.app</div></div></div>
              <div className="contact-method"><div className="cm-icon">💬</div><div><div className="cm-label">In-app Support</div><div className="cm-val">Chat with us via the AI or support tab</div></div></div>
              <div className="contact-method"><div className="cm-icon">📰</div><div><div className="cm-label">Press Enquiries</div><div className="cm-val">press@yescoach.app</div></div></div>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-field"><label>Your Name</label><input type="text" placeholder="Marcus Johnson" /></div>
            <div className="form-field"><label>Email Address</label><input type="email" placeholder="marcus@example.com" /></div>
            <div className="form-field">
              <label>Subject</label>
              <select>
                <option>General Question</option>
                <option>Support</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Bug Report</option>
              </select>
            </div>
            <div className="form-field"><label>Message</label><textarea rows="5" placeholder="Tell us what's on your mind…"></textarea></div>
            <button className="form-submit">Send Message →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
