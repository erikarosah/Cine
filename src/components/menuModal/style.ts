import styled from 'styled-components';

export const Container = styled.div<{ modalactive: boolean }>`
  width: ${(props) => (props.modalactive ? '100%' : '0')};
  height: 100vh;

  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;

  background: rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease;
  transform: ${(props) => (props.modalactive ? 'translateX(0)' : 'translateX(-100vw)')};
`;

export const Content = styled.div<{ modalactive: boolean }>`
  width: ${(props) => (props.modalactive ? 'auto' : '0')};
  min-width: 20vw;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #121212;
  transition: transform 0.8s;
  transform: ${(props) => (props.modalactive ? 'translateX(0)' : 'translateX(-20vw)')};
  position: absolute;
  z-index: 20;

  header {
    gap: 2rem;
    padding: 1rem;
    display: flex;
    font-size: 1.8rem;

    div {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  a {
    gap: 2rem;
    display: flex;
    align-items: flex-end;

    svg {
      cursor: pointer;
      font-size: 1.5rem;

      &:hover {
        color: violet;
      }
    }
  }

  input {
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 8px;
    color: #ccc;
    background: rgba(211, 211, 211, 0.1);

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const List = styled.ul`
  height: 70%;
  display: flex;
  justify-content: space-around;

  font-size: 1.6rem;
  flex-direction: column;

  li {
    padding: 1rem;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
      background: rgba(211, 211, 211, 0.1);
    }

    a {
      color: #ccc;
    }
  }
`;
