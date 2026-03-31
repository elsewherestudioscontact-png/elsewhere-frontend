import { motion } from 'framer-motion';
const About = () => {
  return (
    <div style={{ paddingTop: '120px', minHeight: '100vh', background: '#fff' }}>
      <div style={{ padding: '0 48px 120px', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: '120px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#00ff66', textTransform: 'uppercase', marginBottom: '24px' }}>Elsewhere Studios</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: '900', lineHeight: '0.95', letterSpacing: '-2px', marginBottom: '60px' }}>We don't<br />follow.<br /><span style={{ color: '#00ff66' }}>We exist.</span></h1>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#333', fontFamily: 'Playfair Display, serif', marginBottom: '32px' }}>Elsewhere Studios was built for those who refuse to be placed. Not trend-chasers. Not followers. People who dress like they invented the language.</p>
            <p style={{ fontSize: '14px', lineHeight: '2', color: '#666', marginBottom: '32px' }}>Every piece we create starts with a question — what does it feel like to exist outside the expected? The answer lives in our fabrics, our cuts, our silence between seams. We make clothing that speaks before you do.</p>
            <p style={{ fontSize: '14px', lineHeight: '2', color: '#666' }}>Elsewhere is not a destination. It's a state of mind. And you either live there — or you don't.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ borderTop: '1px solid #eee', paddingTop: '80px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '900', marginBottom: '24px' }}>The philosophy</h2>
          <p style={{ fontSize: '16px', lineHeight: '2', color: '#555', maxWidth: '700px', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>"Clothing is the first sentence you say in any room. Make sure it's worth reading."</p>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#00ff66', textTransform: 'uppercase', marginTop: '16px' }}>— Elsewhere Studios</p>
        </motion.div>
      </div>
    </div>
  );
};
export default About;
