import Hero from '../components/Hero';
import Shop from './Shop';
const Home = ({ onAddToCart }) => {
  return (<div><Hero /><Shop onAddToCart={onAddToCart} /></div>);
};
export default Home;
