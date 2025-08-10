import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Alumni | Department of Political Science',
  description: 'Alumni network and notable graduates of the Department of Political Science at GCU Lahore',
};

export default function AlumniPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Alumni Network</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the achievements and contributions of our distinguished graduates
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-60 w-full">
                <Image 
                  src="/images/slide1.jpg" 
                  alt="Alumni Network"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Alumni</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at GCU Lahore takes immense pride in its alumni network, which spans across various sectors including politics, diplomacy, academia, civil service, journalism, and non-governmental organizations.
              </p>
              <p className="text-gray-600">
                Our graduates have made significant contributions to society at national and international levels. Many have served in key positions in government, international organizations, research institutions, and universities worldwide. The department maintains strong connections with its alumni, fostering a community that supports current students and enhances the department&apos;s reputation and influence.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Distinguished Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/chairperson.jpeg" 
                    alt="Dr. Ahmad Khan"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Dr. Ahmad Khan</h3>
                <p className="text-gray-500 text-sm mb-2">Class of 1975</p>
                <p className="text-accent font-medium">Former Ambassador to the United Nations</p>
              </div>
              <p className="text-gray-600 text-center">
                A distinguished diplomat who served as Pakistan&apos;s Permanent Representative to the United Nations from 2008 to 2012. He has also served as ambassador to several countries and has been a key figure in Pakistan&apos;s foreign policy establishment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/gcu-vc.png" 
                    alt="Prof. Samina Ali"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Prof. Samina Ali</h3>
                <p className="text-gray-500 text-sm mb-2">Class of 1988</p>
                <p className="text-accent font-medium">Professor at Oxford University</p>
              </div>
              <p className="text-gray-600 text-center">
                An internationally recognized scholar in the field of comparative politics and democratic theory. She has authored several books and numerous research papers, and is a frequent commentator on South Asian politics in global media.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                  <Image 
                    src="/images/slide2.jpg" 
                    alt="Mr. Tariq Mahmood"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Mr. Tariq Mahmood</h3>
                <p className="text-gray-500 text-sm mb-2">Class of 1995</p>
                <p className="text-accent font-medium">Secretary, Ministry of Foreign Affairs</p>
              </div>
              <p className="text-gray-600 text-center">
                A career diplomat who has risen through the ranks to become the Secretary of the Ministry of Foreign Affairs. He has played a crucial role in shaping Pakistan&apos;s foreign policy, especially regarding regional cooperation and economic diplomacy.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/alumni/notable-graduates" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View More Distinguished Alumni
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Alumni Success Stories</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">From Classroom to Parliament</h3>
                <p className="text-gray-600">
                  Read about how Ms. Ayesha Raza, a 2005 graduate, transitioned from being a political science student to becoming a member of the National Assembly and championing educational reforms.
                </p>
                <Link href="/alumni/notable-graduates" className="text-accent hover:underline mt-2 inline-block">Read Full Story</Link>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Making a Global Impact</h3>
                <p className="text-gray-600">
                  Learn about Dr. Rashid Khan&apos;s journey from GCU to the United Nations, where he now leads important initiatives on climate policy and sustainable development.
                </p>
                <Link href="/alumni/notable-graduates" className="text-accent hover:underline mt-2 inline-block">Read Full Story</Link>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Discover how Prof. Zainab Ahmed&apos;s research at Harvard University is changing the discourse on South Asian politics and influencing policy decisions.
                </p>
                <Link href="/alumni/notable-graduates" className="text-accent hover:underline mt-2 inline-block">Read Full Story</Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Alumni Initiatives</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Mentorship Program</h3>
                <p className="text-gray-600 mb-4">
                  Our alumni mentorship program connects current students with graduates who provide guidance, career advice, and networking opportunities. This initiative has helped many students navigate their academic and professional journeys effectively.
                </p>
                <Link href="/alumni/mentorship" className="text-accent hover:underline">Learn More</Link>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Scholarship Fund</h3>
                <p className="text-gray-600 mb-4">
                  The Alumni Scholarship Fund supports talented students who face financial constraints. Established in 2010, this fund has helped dozens of deserving students complete their education at the department.
                </p>
                <Link href="/alumni/scholarship-fund" className="text-accent hover:underline">Learn More</Link>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual Alumni Reunion</h3>
                <p className="text-gray-600 mb-4">
                  Every year, the department hosts an alumni reunion, bringing together graduates from different batches to reconnect, network, and share their experiences with current students.
                </p>
                <Link href="/alumni/events" className="text-accent hover:underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Join the Network</h3>
              <p className="text-gray-600">
                Register with our alumni network to stay connected with the department and fellow graduates.
              </p>
              <Link href="/alumni/register" className="text-accent hover:underline mt-4 inline-block">Register Now</Link>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Volunteer</h3>
              <p className="text-gray-600">
                Contribute your time and expertise to support various department initiatives and student activities.
              </p>
              <Link href="/alumni/volunteer" className="text-accent hover:underline mt-4 inline-block">Volunteer Opportunities</Link>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Donate</h3>
              <p className="text-gray-600">
                Support the department&apos;s educational and research initiatives through financial contributions.
              </p>
              <Link href="/alumni/donate" className="text-accent hover:underline mt-4 inline-block">Make a Donation</Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Alumni Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alumni Coordinator</h3>
              <p className="text-gray-600 mb-1">Ms. Farah Naveed</p>
              <p className="text-gray-600 mb-1">Email: alumni.polsc@gcu.edu.pk</p>
              <p className="text-gray-600">Phone: +92-42-99213344 Ext. 345</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-1">Monday to Friday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Room 105, Political Science Department Building</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
