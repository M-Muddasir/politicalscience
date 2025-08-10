import React from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Removed unused import

interface ChairpersonMessageProps {
  name?: string;
  title?: string;
  message?: string;
  imageUrl?: string;
}

const ChairpersonMessage: React.FC<ChairpersonMessageProps> = ({
  name = 'Prof. Dr. Fouzia Ghani',
  title = 'Message from the Chairperson',
  message = 'A brief message or introduction from the chairperson of the department Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  imageUrl = '/images/chairperson.jpeg',
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">{title}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">{name}</h3>
            <p className="text-gray-600 text-center">Chairperson</p>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">{message}</p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Under our department&apos;s guidance, students gain a deep understanding of political systems, international relations, and governance. Our faculty comprises dedicated scholars committed to academic excellence and student success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We invite you to explore our programs and join our vibrant academic community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairpersonMessage;
