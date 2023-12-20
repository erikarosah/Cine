import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem 4rem;

  background: url('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1aocbW.img');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  flex: 1;
  margin-left: 4rem;

  ul {
    height: 100%;
    display: flex;
    align-self: flex-start;
    gap: 2rem;
  }

  ul li {
    font-size: 1.3rem;
    transition: filter 0.2s;
    text-shadow: 1px 1px 2px black;
  }

  ul li:hover {
    filter: opacity(0.8);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50px;

  width: 60px;
  height: 60px;
  overflow: hidden;

  cursor: pointer;

  div {
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 2.5rem;
  }

  input {
    height: 100%;
    padding: 0 0.5rem;
    border: none;
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
`;

export const Menu = styled.div`
  display: none;
`;
