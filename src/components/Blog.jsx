import React, { useEffect, useState } from 'react';
import '../styles/Blog.module.css';

const Blog = () => {
  //https://devbirdfeet.tistory.com/213
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []); // 페이지 로딩 시 한 번만 실행

  return (
    <div>
      <div className='text-box'>
        <span className={`${isVisible ? 'hover' : 'none'}`}>환영합니다</span>
      </div>
      {/* <div style={{ color: 'black', paddingBottom: '100px' }}>1번 페이지 입니다.</div> */}
    </div>
  );
};

export default Blog;
