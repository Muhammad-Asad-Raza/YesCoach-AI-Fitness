import React from 'react';

const Privacy = () => {
  return (
    <div className="page-container privacy-page">
      <div className="inner-page" style={{maxWidth: '780px'}}>
        <div className="inner-hero">
          <div className="section-label">Legal</div>
          <h1 className="inner-title">Privacy Policy</h1>
          <div className="legal-date">Last updated: March 1, 2026</div>
        </div>
        <div className="legal-content">
          <h2>1. Information We Collect</h2>
          <p>YesCoach collects information you provide directly to us, including when you create an account, connect a wearable device, use our AI coach, or contact support. This includes your name, email address, fitness goals, training history, and health metrics such as HRV, sleep data, and heart rate.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use your data exclusively to provide and improve the YesCoach service. This includes generating personalised training plans, making real-time plan adjustments based on your biometric data, and improving our AI models. <strong>We never sell your personal data to third parties.</strong></p>
          <ul>
            <li>Providing personalised training plans and AI coaching</li>
            <li>Syncing with connected wearable devices and health apps</li>
            <li>Improving model accuracy using anonymised, aggregated data</li>
            <li>Sending you important service communications</li>
          </ul>
          <h2>3. Data Security</h2>
          <p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We follow industry-standard security practices and conduct regular third-party security audits. In the event of a data breach, we will notify affected users within 72 hours.</p>
          <h2>4. Your Rights</h2>
          <p>You have the right to access, correct, export, or delete your data at any time. You can exercise these rights from within the YesCoach app under Settings → Privacy, or by contacting us at privacy@yescoach.app.</p>
          <h2>5. Third-Party Integrations</h2>
          <p>When you connect a third-party service (Oura Ring, Apple Health, Garmin, Strava), you are subject to that service's privacy policy as well. YesCoach only requests the minimum permissions required to provide the service.</p>
          <h2>6. Data Retention</h2>
          <p>We retain your data for as long as your account is active. Upon account deletion, your personal data is permanently removed within 30 days, except where legal obligations require longer retention.</p>
          <h2>7. Contact</h2>
          <p>For privacy-related questions, contact us at privacy@yescoach.app or write to: YesCoach Ltd, Dubai, UAE.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
