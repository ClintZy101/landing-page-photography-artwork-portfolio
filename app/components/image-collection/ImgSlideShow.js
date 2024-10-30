'use client'
import React, { useState, useEffect } from 'react';

// export default function ImgSlideShow({image}) {
//   return (
//     <div className="relative">
//       <img src={image}
//       className="lg:w-full lg:h-[600px]"
//       alt="picture"
//       />
//       {/* backdrop-blur-sm  */}
//       <div className="absolute top-0  w-full grid items-center h-20  backdrop-blur-sm">
//         <h1 className="text-center text-black">This is my Art Portfolio</h1>
//       </div>
//       </div>
//   )
// }




const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component unmounts
  }, [images.length]);

  return (
    <div className="relative">
      <img
        className="lg:w-full lg:h-[600px]"
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        // style={{ width: '100%', height: 'auto' }} 
      />
      <div className="absolute top-0  w-full grid items-center h-20  backdrop-blur-sm">
        <h1 className="text-center text-black">This is my Art Portfolio</h1>
      </div>
    </div>
  );
};

export default ImageSlideshow


