import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="slider-container h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg relative">
      <div
        className="slider h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide w-full flex-shrink-0 relative">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{image.alt}</h2>
                <p className="text-lg md:text-xl max-w-xl mx-auto">
                  Découvrez les ressources pour réussir vos études en CPGE
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Optional navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green p-2 rounded-full shadow"
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
      >
        &#8249;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green p-2 rounded-full shadow"
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
