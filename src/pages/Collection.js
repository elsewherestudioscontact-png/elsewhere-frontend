import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const collections = [
  { name: 'Void Series', description: 'Pieces that exist in the space between structure and chaos.', items: '8 pieces', color: '#000', textColor: '#fff', accent: '#00ff66' },
  { name: 'Surface Series', description: 'Where texture becomes language and fabric becomes feeling.', items: '7 pieces', color: '#f5f5f5', textColor: '#000', accent: '#000' },
  { name: 'Signal Series', description: 'Bold. Unapologetic. Designed to be noticed.', items: '7 pieces', color: '#00ff66', textColor: '#000', accent: '#000' },
];
const Collection = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '0 48px 120px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '80px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#00ff66', textTransform: 'uppercase', marginBottom: '12px' }}>Elsewhere Studios</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '900', letterSpacing: '-1px' }}>Collections</h1>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {collections.map((col, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} whileHover={{ scale: 1.01 }} style={{ background: col.color, color: col.textColor, padding: '80px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'none' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: col.accent, marginBottom: '16px' }}>{col.items}</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: '900', marginBottom: '16px' }}>{col.name}</h2>
                <p style={{ fontSize: '14px', lineHeight: '1.8', maxWidth: '400px', opacity: 0.7 }}>{col.description}</p>
              </div>
              <Link to="/shop" style={{ textDecoration: 'none' }}><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '16px 40px', background: col.accent, color: col.color === '#000' ? '#000' : '#fff', border: 'none', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none' }}>Explore</motion.button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
