import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const handleSubmit = async () => {
    try {
      const url = isLogin ? 'http://localhost:3000/api/auth/login' : 'http://localhost:3000/api/auth/register';
      const res = await axios.post(url, form);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setMessage('');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };
  const handleLogout = () => { localStorage.removeItem('token'); setUser(null); };
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '0 48px 120px', maxWidth: '500px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '60px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#00ff66', textTransform: 'uppercase', marginBottom: '12px' }}>Elsewhere Studios</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '900', letterSpacing: '-1px' }}>{user ? `Welcome, ${user.name}` : isLogin ? 'Sign In' : 'Create Account'}</h1>
        </motion.div>
        {user ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '40px', lineHeight: '1.8' }}>You're signed in as <strong>{user.email}</strong></p>
            <motion.button whileHover={{ background: '#00ff66', color: '#000' }} onClick={handleLogout} style={{ padding: '16px 40px', background: '#000', color: '#fff', border: 'none', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', cursor: 'none', transition: 'all 0.3s ease' }}>Sign Out</motion.button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {!isLogin && (<div style={{ marginBottom: '24px' }}><label style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '14px', border: '1px solid #eee', fontSize: '14px', outline: 'none' }} /></div>)}
            <div style={{ marginBottom: '24px' }}><label style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Email</label><input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ width: '100%', padding: '14px', border: '1px solid #eee', fontSize: '14px', outline: 'none' }} /></div>
            <div style={{ marginBottom: '40px' }}><label style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Password</label><input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} style={{ width: '100%', padding: '14px', border: '1px solid #eee', fontSize: '14px', outline: 'none' }} /></div>
            {message && <p style={{ color: 'red', fontSize: '13px', marginBottom: '24px' }}>{message}</p>}
            <motion.button whileHover={{ background: '#00ff66', color: '#000' }} whileTap={{ scale: 0.98 }} onClick={handleSubmit} style={{ width: '100%', padding: '18px', background: '#000', color: '#fff', border: 'none', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600', cursor: 'none', transition: 'all 0.3s ease', marginBottom: '24px' }}>{isLogin ? 'Sign In' : 'Create Account'}</motion.button>
            <p style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>{isLogin ? "Don't have an account? " : 'Already have an account? '}<span onClick={() => setIsLogin(!isLogin)} style={{ color: '#00ff66', cursor: 'none', fontWeight: '600' }}>{isLogin ? 'Create one' : 'Sign in'}</span></p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Account;
