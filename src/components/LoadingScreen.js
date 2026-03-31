import { motion } from 'framer-motion';
const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.8, delay: 2.5 }} onAnimationComplete={onComplete} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '900', letterSpacing: '12px', color: '#fff' }}>ELSEWHERE</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '4px', color: '#00ff66', marginTop: '12px', textTransform: 'uppercase' }}>Elsewhere Studios</motion.div>
      <motion.div initial={{ width: 0 }} animate={{ width: '200px' }} transition={{ duration: 1.5, delay: 0.8 }} style={{ height: '1px', background: '#00ff66', marginTop: '40px' }} />
    </motion.div>
  );
};
export default LoadingScreen;
