import { useEffect, useRef, useState } from 'react';

const SPRING = 0.18; // Springiness of the trail
const DAMPING = 0.75; // How quickly the trail slows down

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const velocity = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: position.x, y: position.y });

  // Mouse move handler
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleDown = () => setIsActive(true);
    const handleUp = () => setIsActive(false);
    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const isInteractive = Boolean(
        t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button')
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  // Animation loop with spring physics
  useEffect(() => {
    const animate = () => {
      // Physics for trailing
      const dx = position.x - trailPos.current.x;
      const dy = position.y - trailPos.current.y;
      velocity.current.x = velocity.current.x * DAMPING + dx * SPRING;
      velocity.current.y = velocity.current.y * DAMPING + dy * SPRING;
      trailPos.current.x += velocity.current.x;
      trailPos.current.y += velocity.current.y;

      // Update DOM
      if (cursorRef.current) {
        cursorRef.current.style.left = `${position.x}px`;
        cursorRef.current.style.top = `${position.y}px`;
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${trailPos.current.x}px`;
        trailRef.current.style.top = `${trailPos.current.y}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isActive ? 'active' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: isHovering
            ? 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(0, 255, 255, 0.85))'
            : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(0, 153, 255, 0.85))',
          border: '2px solid rgba(0, 153, 255, 0.6)',
          boxShadow: isActive
            ? '0 0 24px 8px rgba(0, 100, 255, 0.7), 0 0 48px 16px rgba(0, 50, 255, 0.5)'
            : '0 0 16px 6px rgba(0, 100, 255, 0.6)',
          mixBlendMode: 'normal',
          transform: `translate(-50%, -50%) scale(${isActive ? 0.7 : isHovering ? 1.3 : 1})`,
          transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s cubic-bezier(.17,.67,.83,.67)',
        }}
      />
      {/* Trailing glow */}
      <div
        ref={trailRef}
        className="cursor-trail"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 100, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(8px)',
          mixBlendMode: 'normal',
          transform: 'translate(-50%, -50%)',
          transition: 'background 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
