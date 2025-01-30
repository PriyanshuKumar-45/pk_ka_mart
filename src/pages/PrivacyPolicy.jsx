import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-gray-100 p-5 rounded-lg drop-shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-4">Privacy Policy</h1>

        <p className="text-lg mb-4">
          At <strong>Pk-Mart</strong>, your privacy is one of our top priorities. This Privacy Policy document outlines the
          types of personal information that is received and collected by us and how it is used.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
        <p className="mt-2">
          We collect the following types of information when you use our website:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Personal Information:</strong> When you sign up for an account or make a purchase, we collect your name, email address, phone number, and shipping address.</li>
          <li><strong>Payment Information:</strong> We collect payment details (such as credit card information) when you make a purchase.</li>
          <li><strong>Usage Data:</strong> We collect information on how you interact with our website, such as your browsing activity and preferences.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p className="mt-2">
          The information we collect is used for the following purposes:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Order Processing:</strong> To process and fulfill your orders, including sending you order updates and invoices.</li>
          <li><strong>Improvement of Services:</strong> To enhance our website and customer service based on your feedback and usage data.</li>
          <li><strong>Marketing:</strong> To send promotional emails, newsletters, and offers, if you have subscribed to our mailing list.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Data Security</h2>
        <p className="mt-2">
          We take the security of your personal information seriously and implement a variety of security measures to protect it.
          These measures include encryption of sensitive data and regular security audits to ensure the safety of your information.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Sharing Your Information</h2>
        <p className="mt-2">
          We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted
          third-party service providers for the purpose of processing payments, delivering products, or improving our services.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Cookies</h2>
        <p className="mt-2">
          Our website uses cookies to enhance your user experience. A cookie is a small file that is stored on your device and
          allows us to remember your preferences and improve the functionality of the website.
        </p>
        <p className="mt-2">
          You can choose to disable cookies in your browser settings. However, please note that disabling cookies may affect the
          functionality of some parts of the website.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
        <p className="mt-2">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Access:</strong> Request access to the personal data we hold about you.</li>
          <li><strong>Rectify:</strong> Request correction of any inaccuracies in your personal data.</li>
          <li><strong>Delete:</strong> Request deletion of your personal data, subject to certain conditions.</li>
          <li><strong>Opt-Out:</strong> Opt-out of marketing communications at any time by clicking the "unsubscribe" link in our emails.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">7. Third-Party Links</h2>
        <p className="mt-2">
          Our website may contain links to third-party websites that are not controlled by us. We are not responsible for the
          privacy practices or content of these external sites.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Changes to This Policy</h2>
        <p className="mt-2">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an
          updated "last revised" date. Please review this policy periodically for any updates.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
