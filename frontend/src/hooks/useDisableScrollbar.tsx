import { useEffect } from 'react';

export const useDisableScrollbar = (isDisabled: boolean = true) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    if (isDisabled) {
      // Calculate width of scrollbar to prevent content shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Apply styles
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isDisabled]);
};