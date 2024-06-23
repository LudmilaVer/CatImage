import React from 'react';
import CatImage from './components/CatImage';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Случайное изображение кошки</h1>
      <CatImage />
    </div>
  );
};

export default App;