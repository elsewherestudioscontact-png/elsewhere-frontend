import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: scrolled ? '12px 48px' : '24px 48px', background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', borderBottom: scrolled ? '1px solid #eee' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.4s ease' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div whileHover={{ letterSpacing: '6px' }} transition={{ duration: 0.3 }} style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: '900', letterSpacing: '4px', color: '#000' }}>ELSEWHERE</motion.div>
      </Link>
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {['Shop', 'Collection', 'About'].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#000', fontSize: '13px', letterSpacing: '2px', fontWeight: '500', textTransform: 'uppercase' }}>
            <motion.span whileHover={{ color: '#00ff66' }} transition={{ duration: 0.2 }}>{item}</motion.span>
          </Link>
        ))}
        <Link to="/cart" style={{ textDecoration: 'none', color: '#000', fontSize: '13px', letterSpacing: '2px', fontWeight: '500', textTransform: 'uppercase' }}>
          <motion.span whileHover={{ color: '#00ff66' }} transition={{ duration: 0.2 }}>Cart {cartCount > 0 && `(${cartCount})`}</motion.span>
        </Link>
        <Link to="/account" style={{ textDecoration: 'none', color: '#000', fontSize: '13px', letterSpacing: '2px', fontWeight: '500', textTransform: 'uppercase' }}>
          <motion.span whileHover={{ color: '#00ff66' }} transition={{ duration: 0.2 }}>Account</motion.span>
        </Link>
      </div>
    </motion.nav>
  );
};
export default Navbar;
