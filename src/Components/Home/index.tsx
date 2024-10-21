import  React, { useState } from 'react';


const Home = () => {

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const slides = [
    { id: 1, src: 'bg-hero-gradient', alt: 'Slide 1' },
    { id: 2, src: 'https://via.placeholder.com/600x300?text=Slide+2', alt: 'Slide 2' },
    { id: 3, src: 'https://via.placeholder.com/600x300?text=Slide+3', alt: 'Slide 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return(
    <section className="mt-14 px-6">
      <div className="w-full  mx-auto">
        <div className="overflow-hidden h-[550px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-scroll space-x-4 p-4 hide-scrollbar mt-7"
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full ">
                  <div className={`${slide.src} w-[100%] relative h-[550px] rounded-md flex flex-col justify-center items-center p-5`}>
                    
                    <h1 className="font-semibold">OpenAI o1</h1>
                    <p className="my-4 px-6 text-xl text-center">A new series of AI models designed to spend more time thinking before they respond.</p>
                    <button className="bg-white text-black rounded-3xl">Learn more</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4 '>
          <div className="bg-gray-400 hover:bg-white w-2 h-2 rounded mx-2" onClick={()=>scroll("left")}></div>
          <div className="bg-gray-400 hover:bg-white w-2 h-2 rounded mx-2" onClick={()=>scroll("left")}></div>
          <div className="bg-gray-400 hover:bg-white w-2 h-2 rounded mx-2" onClick={()=>scroll("left")}></div>
          <div className="bg-gray-400 hover:bg-white w-2 h-2 rounded mx-2" onClick={nextSlide}></div>
          <div className="bg-gray-400 hover:bg-white w-2 h-2 rounded mx-2" onClick={prevSlide}></div>
        </div>
      </div>
    
  </section>
  )
};

export default Home





{/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl pt-32 pb-20">
      <div className="mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Creating safe AI systems that benefit humanity</h1>
        <p className="text-xl mb-8">Our mission is to ensure that artificial general intelligence benefits all of humanity.</p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 inline-flex items-center">
          Learn more <FaArrowRight className="ml-2" size={20} />
        </button>
      </div>
    </div> */}