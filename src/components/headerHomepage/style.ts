import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://www.themoviedb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg');

  @media (max-width: 1024px) {
    height: 60vh;
  }
`;
