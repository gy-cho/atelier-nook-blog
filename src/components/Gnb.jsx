import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/Gnb.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import IdeaIconOn from '../assets/icon/idea-on.svg';
import IdeaIconOff from '../assets/icon/idea-off.svg';
import IdeaIconHover from '../assets/icon/idea-hover.svg';

const Gnb = () => {
  const location = useLocation();
  const history = useHistory();
  const [buttons, setButtons] = useState([
    { isActive: false, isHovered: false, isClicked: location.pathname === '/blog' },
    { isActive: false, isHovered: false, isClicked: location.pathname === '/blog1' },
    { isActive: false, isHovered: false, isClicked: location.pathname === '/blog2' },
  ]);
  const [buttonDescriptions, setButtonDescriptions] = useState(['HOME', 'BLOG', 'ETC']);
  const [hoveredDescription, setHoveredDescription] = useState(null);
  const [test, setTest] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredDescription(buttonDescriptions[index]);
    // 마우스 호버 상태로 변경
    const updatedButtons = [...buttons];
    updatedButtons[index].isHovered = true;
    setButtons(updatedButtons);
  };

  const handleMouseLeave = (index) => {
    setHoveredDescription(null);
    // 마우스 호버 상태 해제
    const updatedButtons = [...buttons];
    updatedButtons[index].isHovered = false;
    setButtons(updatedButtons);
  };

  const handleImageClick = (index) => {
    // 클릭한 이미지를 활성화하고 나머지 버튼을 비활성화
    const updatedButtons = buttons.map((button, i) => ({
      isActive: i === index,
      isHovered: false,
      isClicked: i === index,
    }));
    setButtons(updatedButtons);

    if (index === 0) {
      history.push('/blog');
    } else if (index === 1) {
      history.push('/blog1');
    } else if (index === 2) {
      history.push('/blog2');
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {buttons.map((button, index) => (
          <Tooltip message={buttonDescriptions[index]}>
            <img
              className={styles.image_button}
              key={index}
              src={
                button.isClicked
                  ? IdeaIconOn
                  : button.isHovered
                  ? IdeaIconHover
                  : button.isActive
                  ? IdeaIconOn
                  : IdeaIconOff
              }
              alt='Button'
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ cursor: 'pointer' }}
              draggable='false'
            />
          </Tooltip>
        ))}
        <div className={styles.separator}></div>
      </div>
    </div>
  );
};

const Tooltip = ({ children, message }) => {
  return (
    <Container>
      <div class='test'>
        {children}
        <div className='tooltip'>{message}</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
    opacity: 1;
  }
  &.hover {
    // 호버시 추가되는 클래스
    top: 0px; // 호버시 top 위치를 조금 위로 움직여준다.
    animation-duration: 0.0001s; // 애니메이션 3초동안 실행
    animation-name: fadeout; // 애니메이션 효과는 fade-out
  }

  @keyframes fadeout {
    // fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  .tooltip {
    white-space: pre-line;
    position: absolute;
    bottom: 0;
    background-color: #ffaaaa;
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.25px;
    padding: 5px 11px;
    width: max-content;
    z-index: 100;
    transform: translateY(50%);

    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;

export default Gnb;
