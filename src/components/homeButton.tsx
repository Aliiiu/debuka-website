"use client";

import React from 'react';
import UpArrow from '@/assets/icons/upward-arrow'



const HomeButton = () => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("hero");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("id not found.");
    }
  };

  return (
  <section className='items-center'>
    <button className="fixed flex items-center gap-2 px-4 py-2 bottom-10 right-20 bg-black border border-white shadow-lg whitespace-nowrap  min-w-[max-content] z-50" onClick={handleScroll} style={buttonStyle}>
    
    <span className="text-white text-sm md:text-lg font-swis font-semibold ">
			Back to Top
	</span>
	<UpArrow />
	
    </button>
    </section>
  );
};


const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '10px',
        
};

export default HomeButton; 
