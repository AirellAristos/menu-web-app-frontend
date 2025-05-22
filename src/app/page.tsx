'use client';
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function AutoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: 'free',
    slides: {
      perView: 1.32,
      spacing: 20,
      origin: 'center'
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
      console.log('Slide index:', s.track.details.rel);
    },
  });

  // Auto-play logic
  useEffect(() => {
    if (!slider.current || !isPlaying) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [slider, isPlaying]);

  return (
    <div className="pb-20">
      {/* Slider Section */}
      <div
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div ref={sliderRef} className="keen-slider h-96">
          <div className="keen-slider__slide bg-red-400 flex items-center justify-center text-white text-2xl rounded-xl">Slide 1</div>
          <div className="keen-slider__slide bg-blue-400 flex items-center justify-center text-white text-2xl rounded-xl">Slide 2</div>
          <div className="keen-slider__slide bg-green-400 flex items-center justify-center text-white text-2xl rounded-xl">Slide 3</div>
        </div>

        {/* Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-amber-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Menu Section */}
      <section id="signatureMeal" className="px-52 mt-20">
        <div className="flex flex-col gap-y-3 mb-6">
          <p className="text-xl font-bold">Menu</p>
          <p>Where Every Dish Tells a Story</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="shadow-md hover:shadow-xl h-64 rounded-md flex items-center justify-center">
              Gambar {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 hover:underline transition-colors">
            <span className="text-xl">See Menu</span>
            <img
              src="/icons/right-arrow-svgrepo-com.svg"
              alt="Right Arrow"
              className="w-6"
            />
          </button>
        </div>
      </section>

      {/* News Section */}
      <section id='News' className='px-52 mt-20'>
        <div className='text-xl font-bold mb-6'>Latest News</div>

        <div className='grid grid-rows-4 gap-8'>
          {["news1", "news2", "news3", "news5"].map((item) => (
            <div key={item} className='shadow-md hover:shadow-xl h-30 p-4 rounded-md'>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 hover:underline transition-colors">
            <span className="text-xl">Explore News</span>
            <img
              src="/icons/right-arrow-svgrepo-com.svg"
              alt="Right Arrow"
              className="w-6"
            />
          </button>
        </div>

      </section>

      {/* Review Section */}
      <section id='review' className='px-52 mt-20'>
        <div className="flex flex-col gap-y-3 mb-6">
          <p className="text-xl font-bold">Reviews</p>
          <p>What They’re Saying After Every Bite!</p>
        </div>

        <div className='grid grid-cols-2 grid-rows-3 gap-8'>
          {["review1", "review2", "review3", "review4", "review5", "review6",].map((item) => (
            <div key={item} className='shadow-md hover:shadow-xl h-30 p-4 rounded-md'>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 hover:underline transition-colors">
            <span className="text-xl">View All The Reviews</span>
            <img
              src="/icons/right-arrow-svgrepo-com.svg"
              alt="Right Arrow"
              className="w-6"
            />
          </button>
        </div>
      </section>

      {/* Additional Section (kosong) */}
      <section className="px-52 mt-20">

      </section>
    </div>
  );
}