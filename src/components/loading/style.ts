import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  .circle {
    width: 30px;
    height: 30px;
    background: cyan;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    margin: auto;
    animation: circle 6s linear infinite;
  }

  @keyframes circle {
    0% {
      transform: rotate(0deg) translate(-165px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(-165px) rotate(-360deg);
    }
  }
`;
