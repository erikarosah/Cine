import 'swiper/css';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    padding: 2rem 0 0 2rem;
  }
`;

export const Content = styled.main`
  display: flex;
  min-height: 200px;
  position: relative;
  padding: 2rem;
  cursor: grab;
`;

export const Image = styled.img<{ openmenu: boolean }>`
  width: 23rem;
  height: 13rem;
  border-radius: 8px;
  display: ${(props) => (props.openmenu ? 'none' : 'flex')};

  &:hover ~ div {
    visibility: visible;
    transform: translateY(0);
  }
`;

export const Details = styled.div`
  width: 23rem;
  display: flex;
  visibility: hidden;
  position: absolute;
  flex-direction: column;

  bottom: 0;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0 0 8px 8px;

  cursor: pointer;
  text-align: center;

  background-color: #121212;
  transform: translateY(-100px);
  transition: transform 0.5s ease-in-out;

  &:hover {
    visibility: visible;
    transform: translateY(0);
  }

  a {
    border: 1px solid #ccc;
    padding: 5px 0;
    border-radius: 8px;
    margin-top: 0.5rem;

    cursor: pointer;
    color: #f2f2f2;
    background-color: transparent;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
