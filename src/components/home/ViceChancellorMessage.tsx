import Image from 'next/image';
import { prisma } from '@/lib/prisma';

export default async function ViceChancellorMessage() {
  const vcMessage = await prisma.viceChancellorMessage.findFirst({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' }
  });

  if (!vcMessage) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Message from the Vice Chancellor
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                {vcMessage.imageUrl ? (
                  <div className="relative h-80 w-64 overflow-hidden rounded-lg shadow-lg border-2 border-gold">
                    <Image
                      src={vcMessage.imageUrl}
                      alt={vcMessage.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-80 w-64 bg-gray-200 flex items-center justify-center rounded-lg">
                    <span className="text-gray-500">Image not available</span>
                  </div>
                )}
                <div className="bg-primary text-black p-4 rounded-md shadow-md absolute left-1/2 transform -translate-x-1/2 w-64 text-center">
                  <h3 className="font-semibold">{vcMessage.name}</h3>
                  <p className="text-sm text-gold">{vcMessage.title}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3 mt-12 md:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <blockquote className="italic text-gray-700 whitespace-pre-line">
                  {vcMessage.message}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
