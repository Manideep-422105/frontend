import React from 'react';

const ProductCard = ({ imageSrc, title, linkText, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-80 transform transition duration-500 hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-58 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <a 
          href={linkUrl} 
          className="inline-block bg-black font-bold text-[20px] text-yellow-500 py-3 px-10 rounded-lg transition-colors duration-300 hover:bg-yellow-500 hover:text-black"
        >
          {linkText} &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProductCard;