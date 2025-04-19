import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/content';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="temoignages"
      className="py-20 bg-[#0F3460] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Quote size={300} className="absolute -top-20 -left-20 text-white" />
        <Quote size={300} className="absolute -bottom-20 -right-20 text-white" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ce Que <span className="text-[#FFD700]">Disent</span> Nos Clients
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Découvrez les témoignages de nos clients qui ont transformé leurs entreprises
            grâce à nos services de conseil stratégique.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-20">
            <button
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300 -translate-x-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300 translate-x-6"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <Quote className="text-[#FFD700] mb-4" size={36} />
                    <p className="text-gray-700 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-bold text-[#0F3460]">{testimonial.author}</p>
                      <p className="text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-[#FFD700]' : 'w-2 bg-white/40'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;