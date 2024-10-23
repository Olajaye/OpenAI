import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type Props ={
  title: string
  item: {
    textTop?: string,
    textBelow?: string,
    style?: string,
    image?: string,
    video?: string
  }[],
  increaseWeight?: boolean
}

const Card = ({title, item, increaseWeight}:Props ) => {

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
  
  return (
    <>
      <section className="">
        <div className="flex justify-between items-end ps-10 xl:ps-56 mt-20">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex space-x-3 xl:pe-56">
            <IoIosArrowBack className="text-xl" onClick={()=> scroll("left")}/>
            <IoIosArrowForward className="text-xl" onClick={()=> scroll("right")}/>
          </div>
        </div>
      
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll space-x-4 p-4 hide-scrollbar mt-7"
        >
          {item.map((item, index) => (
            <>
              <div
                key={index}
                className={`flex-shrink-0 rounded-md shadow-md flex items-center justify-center text-xl font-semibold overflow-hidden relative`}
              >
                <a href="">
                  <div className={`${index === 0 ? "w-[175px] h-[400px] hidden xl:block": !increaseWeight ? "xl:w-[350px] xl:h-[460px] w-[280px] h-[350px]": "xl:w-[540px] w-[450px] xl:h-[400px] h-[300px]" } `}>

                    <div className="w-[100%] h-[100%] flex justify-center items-center hover:scale-110 transition-all duration-300">
                      {item.image && 
                      <img src={item.image} alt="" className="w-[100%] h-[100%] "/>}
                      {item.video && 
                        <video controls autoPlay loop muted >
                         <source src={item.video} type="video/mp4" />
                        </video>
                      }
                    </div>
                    
                    
                  </div>
                  <div className="absolute top-0 right-0 left-0 p-3 flex justify-between flex-col h-[100%]">
                      <h2 className={item.style ? "text-black" : "text-white"}>{index !== 0 && item.textTop}</h2>
                      <h2 className={item.style ? "text-black" : "text-white"}>{index !== 0 && item.textBelow}</h2>
                    </div>
                </a>
              </div>
            </>
          ))}
        </div>  
      </section>
    </>
  )
}

export default Card
