import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Department of Political Science',
  description: 'Contact information for the Department of Political Science at GCU Lahore',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with the Department of Political Science at Government College University Lahore
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Department Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Department of Political Science<br />
                    Government College University<br />
                    Katchery Road, Lahore 54000<br />
                    Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    Main Office: +92-42-99213344 Ext. 321<br />
                    Chairperson Office: +92-42-99213344 Ext. 322<br />
                    Fax: +92-42-99213345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    General Inquiries: polsc@gcu.edu.pk<br />
                    Admissions: admissions.polsc@gcu.edu.pk<br />
                    Chairperson: chairperson.polsc@gcu.edu.pk
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday to Thursday: 8:30 AM - 4:30 PM<br />
                    Friday: 8:30 AM - 12:30 PM, 2:30 PM - 4:30 PM<br />
                    Saturday and Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input type="text" id="firstname" name="firstname" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input type="text" id="lastname" name="lastname" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Category *</label>
                <select id="category" name="category" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                  <option value="">Select a category</option>
                  <option value="admissions">Admissions</option>
                  <option value="academics">Academics</option>
                  <option value="research">Research Collaboration</option>
                  <option value="events">Events</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="consent" name="consent" required className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded" />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                  I consent to having this website store my submitted information so they can respond to my inquiry *
                </label>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block bg-accent text-black hover:bg-accent-dark px-8 py-3 rounded-md transition-colors">
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 h-96 w-full relative">
            {/* Replace this with an actual map component or iframe from Google Maps */}
              <iframe
                title="GCU Lahore Map"
                src="https://www.google.com/maps?q=Government+College+University+Lahore+Pakistan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Admissions Inquiry</h3>
            <p className="text-gray-600">
              For questions about admission requirements, application procedures, and program details.
            </p>
            <Link href="/admissions" className="text-accent hover:underline mt-3 inline-block">Visit Admissions Page</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Faculty Directory</h3>
            <p className="text-gray-600">
              Find contact information for our faculty members, including office hours and research interests.
            </p>
            <Link href="/faculty" className="text-accent hover:underline mt-3 inline-block">View Faculty Directory</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Events Calendar</h3>
            <p className="text-gray-600">
              Stay updated on upcoming seminars, conferences, workshops, and other department events.
            </p>
            <Link href="/events" className="text-accent hover:underline mt-3 inline-block">Browse Events</Link>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Department Administrative Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/admin-staff1.jpg" 
                  alt="Prof. Dr. Amina Khan - Chairperson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Prof. Dr. Amina Khan</h3>
              <p className="text-gray-600">Chairperson</p>
              <p className="text-gray-600 text-sm">chairperson.polsc@gcu.edu.pk</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/admin-staff2.jpg" 
                  alt="Mr. Faisal Mahmood - Administrative Officer"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Mr. Faisal Mahmood</h3>
              <p className="text-gray-600">Administrative Officer</p>
              <p className="text-gray-600 text-sm">admin.polsc@gcu.edu.pk</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/admin-staff3.jpg" 
                  alt="Ms. Nadia Ahmed - Student Affairs Coordinator"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Ms. Nadia Ahmed</h3>
              <p className="text-gray-600">Student Affairs Coordinator</p>
              <p className="text-gray-600 text-sm">student.affairs@gcu.edu.pk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
