import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;

  h1 {
    padding: 2rem;
  }
`;

export const Content = styled(Link)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.img`
  width: 23rem;
  height: 30rem;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Controls = styled.div<{ page: number }>`
  width: 60%;
  display: flex;
  justify-content: ${(props) => (props.page === 1 ? 'right' : 'space-between')};

  padding: 5rem 0;
  margin: 0 auto;

  svg {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    cursor: pointer;
    background-color: #333;
  }
`;
