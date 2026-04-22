import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const requestRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = mousePos.current.x + 'px';
        cursorRef.current.style.top = mousePos.current.y + 'px';
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      
      requestRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animateRing);

    // Setup scroll reveal listener (global)
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const checkReveals = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        revObs.observe(el);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('visible');
      });
    };

    // Run on initial load and route changes
    checkReveals();
    const mutationObserver = new MutationObserver(checkReveals);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      revObs.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Handle global hover states for cursor
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (
        e.target.closest('a, button, .blog-card, .job-card, .help-cat, .faq-q, .dw-day, .store-btn')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="cursor" 
        style={{ 
          width: isHovering ? '20px' : '12px',
          height: isHovering ? '20px' : '12px'
        }} 
      />
      <div 
        ref={ringRef}
        className="cursor-ring" 
        style={{ 
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
          borderColor: isHovering ? 'rgba(0,200,117,.6)' : 'rgba(0,200,117,.4)'
        }} 
      />

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
