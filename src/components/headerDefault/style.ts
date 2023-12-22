import styled from 'styled-components';

export const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
`;

export const Navigation = styled.nav`
  flex: 1;
  margin-left: 4rem;

  ul {
    height: 100%;
    display: flex;
    gap: 2rem;
    align-self: flex-start;
  }

  ul li {
    font-size: 1.3rem;
    transition: filter 0.2s;
    text-shadow: 1px 1px 2px black;
  }

  ul li:hover {
    filter: opacity(0.8);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Search = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  border-radius: 50px;

  overflow: hidden;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.6);

  div {
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.5rem;
  }

  input {
    height: 100%;
    border: none;
    padding: 0 0.5rem;

    outline: none;
    color: #fff;
    background: transparent;

    &::placeholder {
      color: #fff;
    }
  }

  &:hover {
    width: auto;
    min-width: 200px;
  }

  @media (max-width: 428px) {
    display: none;
  }
`;

export const Menu = styled.div`
  width: 60px;
  height: 60px;
  display: none;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  border-radius: 50%;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 428px) {
    display: flex;
  }
`;
