export default function PrivacyPolicy() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Header */}
        <header className="mb-14">
          <h1 className="text-4xl md:text-5xl font-medium text-dark dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-dark/60 dark:text-white/50">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 text-base leading-relaxed text-dark/80 dark:text-white/70">

          <p>
            Northmark Advisory (“we”, “our”, “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard information when you visit our website.
          </p>

          {/* Section */}
          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              through contact forms, newsletter subscriptions, or direct
              communication. This may include your name, email address, phone
              number, and message content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and requests</li>
              <li>To provide advisory services or information</li>
              <li>To improve website experience and performance</li>
              <li>To communicate relevant updates (only if opted in)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies or similar technologies to analyze
              traffic and improve user experience. These tools collect
              anonymized data and do not personally identify visitors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Data Sharing & Security
            </h2>
            <p>
              We do not sell, rent, or trade your personal information. Reasonable
              security measures are implemented to protect your data from
              unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              Our website may contain links to third-party platforms. We are not
              responsible for the privacy practices or content of external
              websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Data Retention
            </h2>
            <p>
              Personal data is retained only as long as necessary to fulfill the
              purpose for which it was collected or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be
              reflected on this page with a revised update date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium text-dark dark:text-white mb-3">
              Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us through the website or via our official communication
              channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
