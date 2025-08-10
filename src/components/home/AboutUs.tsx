import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">ABOUT US</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            The Department of Political Science at Government College University Lahore is one of the most prestigious academic institutions in Pakistan, dedicated to the study of politics, governance, and international relations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Established with a vision to foster critical thinking and academic excellence, our department offers undergraduate and graduate programs designed to prepare students for careers in government, diplomacy, research, and academia.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our faculty comprises renowned scholars and researchers who bring diverse expertise and international experience to the classroom, ensuring a comprehensive and globally relevant education for our students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To educate and inspire the next generation of political leaders, analysts, and researchers through rigorous academic training, critical thinking, and ethical reasoning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized as a center of excellence in political science education and research, making significant contributions to political discourse at national and international levels.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="inline-block bg-primary hover:bg-primary-dark text-black font-medium py-2 px-6 rounded-md transition duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
