import  React, { useState } from 'react';
import { ChatGPTIMG,  HeroIMG, NewsIMG, ResearchIMG } from '../../assets/assets';


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
    { id: 1, src: HeroIMG.Hero01, alt: 'Slide 1', titile: "OpenAI o1", text:"A new series of AI models designed to spend more time thinking before they respond.", learn: true },
    { id: 2, src: HeroIMG.Hero02, alt: 'Slide 2', titile: "Ask ChatGpt anything", text:"",  learn: false  },
    { id: 3, src: ChatGPTIMG.ChatGPT09, alt: 'Slide 3',titile: "ChatGPT on your desktop", text:"Chat about email, screenshots, files, and anything on your screen.",  learn: true  },
    { id: 3, src: NewsIMG.News01, alt: 'Slide 3',titile: "Apple & ChatGPT", text:"OpenAI and Apple announce partnership to integrate ChatGPT into Apple experiences.",  learn: true  },
    { id: 3, src: ResearchIMG.Research08, alt: 'Slide 3',titile: "Introducing Sora", text:"Creating realistic and imaginative video from text.",  learn: true , vid:true },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };


  return(
    <section className="mt-6">
      <div className="w-full  mx-auto">
        <div className="overflow-hidden h-[620px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-scroll space-x-4 px-7 hide-scrollbar mt-7 h-[620px]"
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full">
                  <div className={`w-[100%]  h-[620px]  rounded-md flex flex-col justify-center items-center relative`}>
                    {!slide.vid && <img src={ slide.src} className='w-[100%]  h-[620px]' />}
                    {slide.vid && 
                        <video controls autoPlay loop muted height={700} width={7000}>
                         <source src={slide.src} type="video/mp4" />
                        </video>
                      }
                    <div className='absolute flex justify-around items-center flex-col'>
                      <h1 className="font-semibold">{slide.titile}</h1>
                      <p className="my-4 px-6 text-xl text-center">{slide.text}</p>
                      {slide.learn && <button className="bg-white text-black rounded-3xl text-center">Learn more</button>}
                    </div>
                   
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