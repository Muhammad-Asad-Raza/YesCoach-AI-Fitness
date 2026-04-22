import React from 'react';

const Terms = () => {
  return (
    <div className="page-container terms-page">
      <div className="inner-page" style={{maxWidth: '780px'}}>
        <div className="inner-hero">
          <div className="section-label">Legal</div>
          <h1 className="inner-title">Terms of Service</h1>
          <div className="legal-date">Last updated: March 1, 2026</div>
        </div>
        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using YesCoach, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.</p>
          <h2>2. Description of Service</h2>
          <p>YesCoach provides an AI-powered personal training platform that generates personalised workout plans based on user-provided goals, biometric data, and training history. The service is intended to support, not replace, professional medical and fitness advice.</p>
          <h2>3. Health Disclaimer</h2>
          <p><strong>Important:</strong> YesCoach is not a medical service. The training plans, recovery recommendations, and biomarker interpretations provided are informational only and do not constitute medical advice. Always consult a qualified healthcare professional before starting a new exercise programme, especially if you have pre-existing health conditions.</p>
          <h2>4. User Responsibilities</h2>
          <ul>
            <li>You must be at least 16 years of age to use YesCoach</li>
            <li>You are responsible for providing accurate health and fitness information</li>
            <li>You agree not to use the service for any unlawful purpose</li>
            <li>You are responsible for maintaining the security of your account credentials</li>
          </ul>
          <h2>5. Subscription and Billing</h2>
          <p>YesCoach offers a free tier and premium subscription plans. Premium subscriptions are billed monthly or annually and auto-renew unless cancelled. You may cancel your subscription at any time from the app or your device's subscription management settings. Refunds are handled in accordance with Apple App Store and Google Play Store policies.</p>
          <h2>6. Intellectual Property</h2>
          <p>All content, features, and functionality of YesCoach — including but not limited to AI models, user interface design, and training methodologies — are the exclusive property of YesCoach Ltd and are protected by applicable intellectual property laws.</p>
          <h2>7. Limitation of Liability</h2>
          <p>YesCoach Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including but not limited to physical injury resulting from following training recommendations.</p>
          <h2>8. Contact</h2>
          <p>For questions about these terms, contact legal@yescoach.app.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
