import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Notable Graduates | Department of Political Science',
  description: 'Distinguished alumni of the Department of Political Science at GCU Lahore',
};

export default function NotableGraduatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Notable Graduates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished alumni who have made significant contributions to politics, academia, and public service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/chairperson.jpeg" 
                alt="Dr. Sarah Ahmed"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Sarah Ahmed</h3>
            <p className="text-accent font-medium mb-2">Class of 1995</p>
            <p className="text-gray-600 text-sm">
              Former Ambassador to the United Nations and current Director of the Institute for Strategic Studies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/gcu-vc.png" 
                alt="Mr. Ali Hassan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Ali Hassan</h3>
            <p className="text-accent font-medium mb-2">Class of 1998</p>
            <p className="text-gray-600 text-sm">
              Secretary Ministry of Foreign Affairs and career diplomat with extensive experience in international relations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/slide1.jpg" 
                alt="Ms. Fatima Khan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ms. Fatima Khan</h3>
            <p className="text-accent font-medium mb-2">Class of 2002</p>
            <p className="text-gray-600 text-sm">
              Member of National Assembly and advocate for women&apos;s rights and educational reform.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/slide2.jpg" 
                alt="Dr. Ahmed Malik"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Ahmed Malik</h3>
            <p className="text-accent font-medium mb-2">Class of 1992</p>
            <p className="text-gray-600 text-sm">
              Professor of Political Science at Harvard University and author of several influential books on democracy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/slide3.jpg" 
                alt="Ms. Zara Qureshi"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ms. Zara Qureshi</h3>
            <p className="text-accent font-medium mb-2">Class of 2005</p>
            <p className="text-gray-600 text-sm">
              Chief Executive Officer of a leading policy think tank and frequent commentator on political affairs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image 
                src="/images/chairperson.jpeg" 
                alt="Mr. Usman Shah"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mr. Usman Shah</h3>
            <p className="text-accent font-medium mb-2">Class of 2000</p>
            <p className="text-gray-600 text-sm">
              Senior Policy Advisor to the Prime Minister and expert in public administration and governance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/alumni" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}