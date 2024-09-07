'use client'
import React, {useEffect} from 'react'
import './HorizontalSlider.css'

const HorizontalSlider = () => {

    
    useEffect(() => {
        // This function only runs after the component mounts, ensuring the DOM is accessible
        const addAnimation = () => {
          const scrollers = document.querySelectorAll('.scroller'); // Moved inside useEffect
    
          // If a user hasn't opted in for reduced motion, we add the animation
          if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            scrollers.forEach((scroller) => {
              // Add data-animated="true" to every `.scroller`
              scroller.setAttribute('data-animated', true);
    
              // Make an array from the elements within `.scroller-inner`
              const scrollerInner = scroller.querySelector('.scroller__inner');
              const scrollerContent = Array.from(scrollerInner.children);
    
              // For each item in the array, clone it, add aria-hidden, and append it to `.scroller-inner`
              scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
              });
            });
          }
        };
    
        addAnimation(); // Call the function to apply the animation
      }, []); // Empty dependency array ensures this effect 
    
  return (
    <div class='background-slider'>

{/*<div class="scroller" data-speed="slow">
  <ul class="tag-list scroller__inner">
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
    <li>SSG</li>
    <li>webdev</li>
    <li>animation</li>
    <li>UI/UX</li>
  </ul>
</div>*/}

<div class="scroller" data-direction="right" data-speed="slow" style={{borderRadius: '10px'}}width={200}>
  <div class="scroller__inner">
    <img src="./@1.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@2.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@6.png" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@4.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@5.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
  </div>
  </div>

  <div class="scroller" data-direction="left" data-speed="slow" style={{borderRadius: '10px'}}width={200}>
  <div class="scroller__inner">
    <img src="./@4.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@3.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@5.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@2.webp" alt="" width={400} style={{borderRadius: '10px'}}/>
    <img src="./@6.png" alt="" width={400} style={{borderRadius: '10px'}}/>
  </div>
  </div>


    </div>
  )
}

export default HorizontalSlider;
