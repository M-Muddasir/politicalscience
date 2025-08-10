import React from 'react';

export const metadata = {
  title: 'Apply for Scholarships | Department of Political Science',
  description: 'Apply for scholarship opportunities at the Department of Political Science, GCU Lahore',
};

export default function ScholarshipApplicationPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Apply for Scholarships</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Submit your application for scholarship opportunities at the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Scholarship Application Form</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                Program/Degree *
              </label>
              <select
                id="program"
                name="program"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select your program</option>
                <option value="bs-political-science">BS Political Science</option>
                <option value="ma-political-science">MA Political Science</option>
                <option value="mphil-political-science">MPhil Political Science</option>
                <option value="phd-political-science">PhD Political Science</option>
              </select>
            </div>

            <div>
              <label htmlFor="scholarshipType" className="block text-sm font-medium text-gray-700 mb-2">
                Scholarship Type *
              </label>
              <select
                id="scholarshipType"
                name="scholarshipType"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select scholarship type</option>
                <option value="merit-based">Merit-Based Scholarship</option>
                <option value="need-based">Need-Based Financial Aid</option>
                <option value="research-excellence">Research Excellence Award</option>
                <option value="international">International Scholarship</option>
                <option value="external">External Scholarship</option>
              </select>
            </div>

            <div>
              <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700 mb-2">
                Current CGPA/Percentage
              </label>
              <input
                type="text"
                id="cgpa"
                name="cgpa"
                placeholder="e.g., 3.75 or 85%"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="familyIncome" className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Family Income (for need-based scholarships)
              </label>
              <input
                type="text"
                id="familyIncome"
                name="familyIncome"
                placeholder="e.g., Rs. 30,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="statement" className="block text-sm font-medium text-gray-700 mb-2">
                Personal Statement *
              </label>
              <textarea
                id="statement"
                name="statement"
                rows={6}
                required
                placeholder="Please explain why you deserve this scholarship and how it will help you achieve your academic goals..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Documents
              </label>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Academic transcripts</p>
                <p>• Income certificate (for need-based scholarships)</p>
                <p>• Recommendation letters</p>
                <p>• Copy of CNIC/Passport</p>
                <p>• Research proposal (for research scholarships)</p>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions and confirm that all information provided is accurate *
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-accent text-black hover:bg-accent-dark px-8 py-3 rounded-md font-medium transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Applications must be submitted before the deadline</li>
            <li>Incomplete applications will not be considered</li>
            <li>All documents must be attested/verified</li>
            <li>Scholarship decisions are final and cannot be appealed</li>
            <li>Recipients must maintain minimum academic standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}