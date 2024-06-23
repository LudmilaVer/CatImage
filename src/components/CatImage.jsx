import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setCatImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Ошибка при получении изображения кошки:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      {catImageUrl && <img src={catImageUrl} alt="Random Cat" className={styles.image} />}
      <button onClick={fetchCatImage} className={styles.button}>Получить новое изображение кошки</button>
    </div>
  );
};

export default CatImage;
