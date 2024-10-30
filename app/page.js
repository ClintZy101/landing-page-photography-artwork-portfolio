"use client";

import ImageSlideshow from "./components/image-collection/ImgSlideShow";
import { imageLinks } from "./image-links/image-links";

export default function Home() {


  return (
    <div className="py-10 px-20 grid justify-center">

      <ImageSlideshow images={imageLinks} />
    
    {/* {imageLinks.map((image,i)=> (
      <ImageCollection image={image} key={i}/>
    )) */}


      
    
    {/* <div className="relative">
      <img src="https://images.pexels.com/photos/1781710/pexels-photo-1781710.jpeg" 
      className="lg:w-full lg:h-[600px]"
      alt="picture"
      />
      <div className="absolute top-0  w-full grid items-center h-20 backdrop-blur-sm">
        <h1 className="text-center text-white">This is my Art Portfolio</h1>
      </div>
      </div> */}


    </div>
  );
}
