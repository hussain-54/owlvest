import React from 'react';

const LegalPolicies = () => {
  return (
    <div className="bg-gradient-to-br from-[#090E21] via-[#2A0E4D] to-[#18092C] min-h-screen text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-white">OwlVest Legal Policies</h1>
        <p className="text-sm mb-2 text-gray-400">Last Updated: 20 July 2025</p>
        <p className="mb-8 text-gray-300">
          Contact: <a href="mailto:owlvestnow@gmail.com" className="text-blue-500 underline">owlvestnow@gmail.com</a>
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">1. Terms and Conditions</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>1.1. Acceptance of Terms:</strong> By accessing this website or engaging with the OwlVest platform, you agree to be legally bound by these Terms and Conditions, along with our Privacy Policy and any other legal notices.</li>
            <li><strong>1.2. Eligibility:</strong> Participation is restricted to those legally permitted within their jurisdictions.</li>
            <li><strong>1.3. Intellectual Property:</strong> All intellectual property belongs to OwlVest or its licensors.</li>
            <li><strong>1.4. Use Restrictions:</strong> You agree not to misuse the platform for any unlawful purposes such as transmitting malicious code or violating IP rights.</li>
            <li><strong>1.5. Token Presale Disclaimer:</strong> Tokens are not securities. Participation is voluntary and at your own risk.</li>
            <li><strong>1.6. Limitation of Liability:</strong> OwlVest is not liable for damages arising from use or inability to use the platform.</li>
            <li><strong>1.7. Platform Access and Termination:</strong> OwlVest may suspend or terminate user access at any time.</li>
            <li><strong>1.8. Project Listings:</strong> Submission grants OwlVest a non-exclusive, royalty-free license to publish project content.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">2. Privacy Policy</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>2.1. Data Collection:</strong> We collect personal data to provide platform functionality.</li>
            <li><strong>2.2. Use of Data:</strong> Used solely for service delivery and platform security. We don’t sell your data.</li>
            <li><strong>2.3. Data Sharing:</strong> Shared only when legally required or with trusted partners under confidentiality.</li>
            <li><strong>2.4. Data Retention:</strong> Retained as long as legally and operationally necessary.</li>
            <li><strong>2.5. Your Rights:</strong> You can request to access, update, or delete your data via email.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">3. Cookie Notice</h2>
          <p className="text-gray-300">
            OwlVest uses cookies for authentication, analytics, and performance optimization. By using our site, you consent to this use.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">4. Risk Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li>Token value may fluctuate.</li>
            <li>Regulatory actions may affect utility.</li>
            <li>Technology issues could result in losses.</li>
            <li>You are responsible for legal compliance and participation risk.</li>
            <li>This is not investment advice; consult a licensed financial advisor.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">5. Complaints Policy</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>5.1. Submission:</strong> Email complaints to <a href="mailto:owlvestnow@gmail.com" className="text-blue-500 underline">owlvestnow@gmail.com</a> with the subject "Complaint - [Your Issue]".</li>
            <li><strong>5.2. Handling:</strong> Acknowledge in 3 business days; resolve within 14 business days.</li>
            <li><strong>5.3. Resolution:</strong> If unresolved, independent arbitration is available.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">6. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-300">
            Policies governed by international commercial law. Disputes resolved through binding arbitration unless local law states otherwise.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-white">7. Modifications to This Document</h2>
          <p className="text-gray-300">
            OwlVest may revise policies without prior notice. Continued use implies acceptance.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">8. Contact</h2>
          <p className="text-gray-300">
            Email inquiries or data requests to: <a href="mailto:owlvestnow@gmail.com" className="text-blue-500 underline">owlvestnow@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalPolicies;
