import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        --bg-color: #121212;
        --text-color: #f2f2f2;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, 'Poppins', sans-serif;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    body {
        background: var(--bg-color);
        color: var(--text-color);
    } 

    a {
        color: var(--text-color);
    }
`;
