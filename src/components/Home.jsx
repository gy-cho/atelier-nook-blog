import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/blog');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleButtonClick}>Go to Blog</button>
    </div>
  );
};

export default Home;
