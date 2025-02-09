"use client";

import React from 'react';
import DownArrow from '@/assets/icons/downward-arrow'
import UpArrow from '@/assets/icons/upward-arrow'


const Scroll = () => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("our-dishes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("id not found.");
    }
  };

  /*return (
     <section className= "item-center"  style ={{ backgroundColor: 'black', padding: '0px 557px' }}>
    <button className= "flex items-center gap-2 px-4 py-2 min-w-[max-content] bg-black" onClick={handleScroll} style={buttonStyle}>
    
    <span className="text-white text-sm md:text-lg font-semibold">
			Scroll Down 
			
	</span> 
	<DownArrow />
        </button>
    </section>
  );
};*/

  return (
  <section className='relative flex items-center justify-center z-10' style ={{ }}>
    <button className=" flex items-center gap-2 px-4 py-2 min-w-[max-content]" onClick={handleScroll} style={buttonStyle}>
    
    <span className="text-white text-sm md:text-lg font-semibold font-swis">
			Order Now
	</span>
	<DownArrow />
	
    </button>
    </section>
  );
};


const buttonStyle = {
        padding: '10px 40px',
        backgroundColor: 'rgba(225,225,225,0.1)',
        borderRadius: '5px',
        
};

export default Scroll; 
