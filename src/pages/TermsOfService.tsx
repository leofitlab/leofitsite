import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="card p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: May 26, 2025</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on LeoFit Lab's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on LeoFit Lab's website are provided on an 'as is' basis. LeoFit Lab makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall LeoFit Lab or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on LeoFit Lab's website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms of Service, please contact us at:
              <br />
              Email: lucilayalejoalx@hotmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
