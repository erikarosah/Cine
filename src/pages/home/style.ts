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
  min-height: 250px;
  display: flex;
  padding: 2rem;
  position: relative;
  cursor: grab;
`;

export const Image = styled.img`
  width: 23rem;
  height: 13rem;
  border-radius: 8px;

  &:hover ~ div {
    transform: translateY(0);
    visibility: visible;
  }
`;

export const Details = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  gap: 0.5rem;

  background-color: #121212;

  border-radius: 0 0 8px 8px;

  transition: transform 0.5s ease-in-out;
  transform: translateY(-100px);
  visibility: hidden;

  position: absolute;
  bottom: 0;

  cursor: pointer;

  &:hover {
    transform: translateY(0);
    visibility: visible;
  }

  button {
    background-color: transparent;
    border: 1px solid #ccc;
    padding: 5px 0;
    border-radius: 8px;
    color: #f2f2f2;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
