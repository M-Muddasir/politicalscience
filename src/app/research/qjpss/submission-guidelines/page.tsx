import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'QJPSS Submission Guidelines | Department of Political Science',
  description: 'Detailed submission guidelines for the Quarterly Journal of Political Science Studies',
};

export default function QJPSSSubmissionGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            QJPSS Submission Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed guidelines for authors submitting to the Quarterly Journal of Political Science Studies
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Manuscript Preparation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Format Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Articles should be between 6,000-8,000 words including references</li>
                    <li>Text should be double-spaced with 12-point Times New Roman font</li>
                    <li>Margins should be 1 inch on all sides</li>
                    <li>Pages should be numbered consecutively</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Abstract and Keywords</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Include an abstract of 200-250 words</li>
                    <li>Provide 5-7 keywords</li>
                    <li>Abstract should clearly state the research question, methodology, and key findings</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Citation Style</h2>
              <p className="text-gray-600 mb-4">
                QJPSS follows the APA 7th edition referencing style. All in-text citations and references must conform to this standard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Submission Process</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Manuscripts should be submitted electronically to <strong>qjpss@gcu.edu.pk</strong> in MS Word format.
                </p>
                <p className="text-gray-600">
                  All submissions are subject to initial editor screening followed by a double-blind peer review process.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Review Process</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  The review process typically takes 8-12 weeks. Authors will be notified of the editorial decision along with reviewer comments.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="text-center">
          <Link href="/research/qjpss" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to QJPSS
          </Link>
        </div>
      </div>
    </div>
  );
}