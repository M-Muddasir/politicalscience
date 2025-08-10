import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Alumni Registration | Department of Political Science',
  description: 'Register with the alumni network to stay connected',
};

export default function AlumniRegisterPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Registration</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our alumni network to stay connected with your alma mater and fellow graduates.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Register?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Stay Connected</h3>
                  <p className="text-gray-600">Receive updates about department news, events, and fellow alumni.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Networking Opportunities</h3>
                  <p className="text-gray-600">Connect with alumni in your field and expand your professional network.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mentorship Programs</h3>
                  <p className="text-gray-600">Participate as a mentor or mentee in our alumni-student programs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Exclusive Events</h3>
                  <p className="text-gray-600">Get invited to alumni-only events, reunions, and professional gatherings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration Information</h2>
            <p className="text-gray-600 mb-6">
              To register with our alumni network, please contact the department office with your current 
              contact information and graduation details. We will add you to our alumni database and 
              mailing list.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Full name and graduation year</li>
                <li>Degree program completed</li>
                <li>Current contact information (email, phone, address)</li>
                <li>Current employment details</li>
                <li>Professional achievements (optional)</li>
                <li>Areas of expertise or interest</li>
              </ul>
            </div>
            
            <div className="bg-accent bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-600 mb-4">
                <strong>Email:</strong> alumni@politicalscience.gcu.edu.pk<br/>
                <strong>Phone:</strong> +92-42-111-000-010<br/>
                <strong>Office:</strong> Department of Political Science, GCU Lahore
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/contact" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors mr-4">
            Contact Us to Register
          </Link>
          <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}