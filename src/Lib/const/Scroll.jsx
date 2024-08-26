import React, { useEffect, useRef, useState } from 'react';

export const Scroll = () => {
    const scrollContainerRef = useRef(null);
    const scrollContentRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        const containerHeight = scrollContainerRef.current.clientHeight;
        const contentHeight = scrollContentRef.current.scrollHeight;
  
        setShowArrow(contentHeight > containerHeight);
      };
  
      // Initial check
      handleResize();
  
      // Check on resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
}