import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;/*taşan içerik gizlenir*/
  position: relative;
`;

const SliderContent = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  
  /* Scrollbar'ı gizle */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE ve Edge */
  scrollbar-width: none; /* Firefox */
`;

const ArrowButton = styled.div<{ direction: 'left' | 'right'; visible: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1;
  user-select: none;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  ${({ direction }) => direction === 'left' ? `
    left: 0;
  ` : `
    right: 0;
  `}
`;

interface SliderProps {
  items: React.ReactNode[];
}

const HorizontalSlider: React.FC<SliderProps> = ({ items }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showArrows, setShowArrows] = useState({ left: false, right: true });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  const scrollTo = (offset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
    }
  };

  const goLeft = () => {
    scrollTo(scrollPosition - 300);
  };

  const goRight = () => {
    scrollTo(scrollPosition + 300);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const x = event.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const checkArrowsVisibility = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowArrows({
          left: scrollLeft > 0,
          right: scrollLeft < (scrollWidth - clientWidth)
        });
      }
    };

    checkArrowsVisibility();
    window.addEventListener('resize', checkArrowsVisibility);

    return () => {
      window.removeEventListener('resize', checkArrowsVisibility);
    };
  }, [scrollPosition, items]);

  return (
    <SliderContainer>
      <ArrowButton direction="left" visible={showArrows.left} onClick={goLeft}>{'<'}</ArrowButton>
      <SliderContent
        ref={sliderRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
      >
        {items}
      </SliderContent>
      <ArrowButton direction="right" visible={showArrows.right} onClick={goRight}>{'>'}</ArrowButton>
    </SliderContainer>
  );
};

export default HorizontalSlider;
