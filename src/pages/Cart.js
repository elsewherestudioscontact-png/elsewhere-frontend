import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Cart = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '0 48px 120px', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '60px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#00ff66', textTransform: 'uppercase', marginBottom: '12px' }}>Elsewhere Studios</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: '900', letterSpacing: '-1px' }}>Your Cart</h1>
        </motion.div>
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', marginBottom: '24px', color: '#999' }}>Your cart is empty.</p>
            <Link to="/shop"><motion.button whileHover={{ background: '#00ff66' }} style={{ padding: '14px 40px', background: '#000', color: '#fff', border: 'none', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', cursor: 'none' }}>Shop Now</motion.button></Link>
          </div>
        ) : (
          <>
            <div style={{ borderTop: '1px solid #eee' }}>
              {cart.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px 0', borderBottom: '1px solid #eee' }}>
                  <img src={item.image_url} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '1px', marginBottom: '6px' }}>{item.name}</div>
                    <div style={{ fontSize: '13px', color: '#666' }}>Qty: {item.quantity}</div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>${(item.price * item.quantity).toFixed(2)}</div>
                  <motion.button whileHover={{ color: '#00ff66' }} onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'none', color: '#999' }}>×</motion.button>
                </motion.div>
              ))}
            </div>
            <div style={{ marginTop: '48px', textAlign: 'right' }}>
              <div style={{ fontSize: '13px', letterSpacing: '2px', color: '#666', textTransform: 'uppercase', marginBottom: '8px' }}>Total</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: '900', marginBottom: '32px' }}>${total.toFixed(2)}</div>
              <motion.button whileHover={{ background: '#00ff66', color: '#000' }} style={{ padding: '18px 60px', background: '#000', color: '#fff', border: 'none', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none', transition: 'all 0.3s ease' }}>Checkout</motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
