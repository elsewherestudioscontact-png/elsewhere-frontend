import { useState } from 'react';
import { motion } from 'framer-motion';
const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleAddToCart = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <motion.div className="product-card" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} whileHover={{ y: -8 }} onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)} style={{ background: '#fff', cursor: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
        <motion.img src={product.image_url} alt={product.name} animate={{ scale: hovered ? 1.08 : 1 }} transition={{ duration: 0.5 }} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
          <motion.button onClick={handleAddToCart} whileTap={{ scale: 0.95 }} style={{ width: '100%', padding: '12px', background: added ? '#00ff66' : '#fff', color: '#000', border: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none', transition: 'background 0.3s ease' }}>{added ? '✓ Added' : 'Add to Cart'}</motion.button>
        </motion.div>
      </div>
      <div style={{ padding: '16px 4px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '1px', fontWeight: '500', marginBottom: '6px' }}>{product.name}</div>
        <div style={{ fontSize: '13px', color: '#666' }}>${product.price}</div>
      </div>
    </motion.div>
  );
};
export default ProductCard;
