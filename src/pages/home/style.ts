import styled from 'styled-components';

import 'swiper/css';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    padding: 2rem 0 0 2rem;
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: flex;
  padding: 2rem;
`;

export const Image = styled.img`
  width: 23rem;
  height: 13rem;
`;
