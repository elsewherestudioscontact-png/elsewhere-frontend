import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Hero = () => {
  const gradientRef = useRef(null);
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.3;
      if (gradientRef.current) {
        gradientRef.current.style.background = `linear-gradient(${angle}deg, #ffffff 0%, #f0fff4 25%, #ffffff 50%, #f5f5f5 75%, #ffffff 100%)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return (
    <div ref={gradientRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} style={{ textAlign: 'center', zIndex: 2 }}>
        <motion.p initial={{ opacity: 0, letterSpacing: '2px' }} animate={{ opacity: 1, letterSpacing: '6px' }} transition={{ duration: 1.2, delay: 0.5 }} style={{ fontSize: '11px', letterSpacing: '6px', textTransform: 'uppercase', color: '#00ff66', marginBottom: '24px', fontWeight: '600' }}>Elsewhere Studios — New Collection</motion.p>
        <motion.h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(60px, 12vw, 140px)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-2px', color: '#000', marginBottom: '40px' }}>
          <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} style={{ display: 'block' }}>ELSE</motion.span>
          <motion.span initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ display: 'block', color: '#00ff66' }}>WHERE</motion.span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/shop" style={{ textDecoration: 'none' }}><motion.button whileHover={{ background: '#00ff66', scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} style={{ padding: '16px 48px', background: '#000', color: '#fff', border: 'none', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none' }}>Shop Now</motion.button></Link>
          <Link to="/collection" style={{ textDecoration: 'none' }}><motion.button whileHover={{ background: '#000', color: '#fff', scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }} style={{ padding: '16px 48px', background: 'transparent', color: '#000', border: '1px solid #000', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none' }}>Collection</motion.button></Link>
        </motion.div>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ position: 'absolute', bottom: '40px', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#999' }}>Scroll</motion.div>
      <div style={{ position: 'absolute', bottom: '20px', right: '24px', fontSize: '9px', letterSpacing: '2px', color: '#ccc', textTransform: 'uppercase' }}>Elsewhere Studios</div>
    </div>
  );
};
export default Hero;
