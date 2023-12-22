import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  gap: 2rem;
  display: flex;
  text-align: center;
  flex-direction: column;

  font-family: 'Poppins', sans-serif;

  button {
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.01);
    }
  }
`;
