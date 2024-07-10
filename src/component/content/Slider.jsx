import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/Coaching1.jpg';
import img2 from '../../assets/Coaching2.avif';
import img3 from '../../assets/Coaching3.avif';
import img4 from '../../assets/Coaching4.webp';
import img5 from '../../assets/Coaching5.webp';
import img6 from '../../assets/Coaching6.webp';
import img7 from '../../assets/Coaching4.webp';
import img8 from '../../assets/Coaching8.jpg';
import styles from './Slider.module.css';

const Slider = () => {
  const [active, setActive] = useState(0);
  const [rotate, setRotate] = useState(0);
  const rotateAdd = 360 / 8; // Adjust for 8 images
  const autoNextRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    autoNextRef.current = setInterval(nextSlider, 3000);
    return () => clearInterval(autoNextRef.current);
  }, []);

  const nextSlider = () => {
    setActive((prevActive) => (prevActive + 1) % images.length);
    setRotate((prevRotate) => prevRotate + rotateAdd);
  };

  const prevSlider = () => {
    setActive((prevActive) => (prevActive - 1 + images.length) % images.length);
    setRotate((prevRotate) => prevRotate - rotateAdd);
  };

  // Calculate the middle image index
  const middleImageIndex = (active + Math.floor(images.length / 3)) % images.length;

  return (
    <div 
      className={styles.slider} 
      style={{ backgroundImage: `url(${images[middleImageIndex]})` }}
    >
      <div className={styles.images} style={{ transform: `translate(-50%, 50%) rotate(${rotate}deg)` }}>
        {images.map((src, index) => (
          <div className={styles.item} key={index} style={{ transform: `rotate(${45 * index}deg)` }}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button id="prev" onClick={prevSlider} className={styles.prev}>&lt;</button>
      <button id="next" onClick={nextSlider} className={styles.next}>&gt;</button>
    </div>
  );
};

export default Slider;
