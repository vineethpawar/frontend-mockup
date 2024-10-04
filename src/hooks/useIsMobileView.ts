// hooks/useIsMobileView.js
import { useState, useEffect } from 'react';

const useIsMobileView = (breakpoint = 650) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check if the window object is defined (to prevent errors during SSR)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < breakpoint);
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [breakpoint]);

  return isMobileView;
};

export default useIsMobileView;
