import { useEffect, useRef } from 'react';
const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 6 + 'px';
      cursor.style.top = mouseY - 6 + 'px';
    };
    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX - 20 + 'px';
      follower.style.top = followerY - 20 + 'px';
      requestAnimationFrame(animateFollower);
    };
    const addHover = () => { cursor.classList.add('hover'); follower.classList.add('hover'); };
    const removeHover = () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); };
    document.addEventListener('mousemove', moveCursor);
    animateFollower();
    const hoverElements = document.querySelectorAll('a, button, .product-card');
    hoverElements.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover); });
    return () => { document.removeEventListener('mousemove', moveCursor); };
  }, []);
  return (<><div className="cursor" ref={cursorRef}></div><div className="cursor-follower" ref={followerRef}></div></>);
};
export default Cursor;
