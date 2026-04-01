import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
const Shop = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  axios.get(`${API_URL}/api/products`).then(res => { 
    setProducts(res.data); 
    setLoading(false); 
  }).catch(err => { 
    console.error(err); 
    setLoading(false); 
  });
}, []);


  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '0 48px 80px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '60px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#00ff66', textTransform: 'uppercase', marginBottom: '12px' }}>Elsewhere Studios</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '900', letterSpacing: '-1px' }}>All Products</h1>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '12px' }}>{products.length} pieces</p>
        </motion.div>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '100px', fontSize: '13px', letterSpacing: '3px', color: '#999' }}>LOADING...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {products.map((product, index) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index % 3 * 0.1 }}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Shop;
