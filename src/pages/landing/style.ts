import styled from 'styled-components';

export const LandingContainer = styled.div`
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #CAF0F8;
    display: grid;
    grid-template-columns: 10vw 40vw 40vw 10vw;
    grid-template-rows: 20% 1fr 12%;
    grid-template-areas: 
    "logo header header header"
    ". main form ."
    ". footer . .";
`

export const Logo = styled.img`
    grid-area: logo;
    width: 105px;
    height: 80px;
`

export const InfoContainer = styled.div`
    grid-area: main;

`

export const Title = styled.h1`
    color: var(--primary-color-9);
    font-size: 4.8rem;
    font-family: Inter, sans-serif;
    margin: 5px;
`

export const Slogan = styled.h2`
    width: 500px;
    font-family: Inter, sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    margin: 5px;
`

export const SignUpBtn = styled.button`
    width: 250px;
    height: 55px;
    background: var(--secondary-color-5);
    border: none;
    cursor: pointer;
    color: #fff;
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 10px;
    border-radius: 2px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const LoginForm = styled.form`
    grid-area: form;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #error {
        margin: 0;
    }

    span {
        width: 440px;
        font-size: 1rem;
        font-family: Inter, sans-serif;
        color: var(--secondary-color-3);
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
    }
`

export const Input = styled.input`
    width: 420px;
    height: 55px;
    background: #FFF;
    border: 2px solid #90E0EF;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 8px 20px;
    margin-top: 8px;
`

export const FormBtn = styled.button`
    width: 420px;
    height: 55px;
    background: var(--primary-color-8);
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
    border: none;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
`

export const FooterCredits = styled.div`
    grid-area: footer;

    img {
        position: absolute;
        bottom: 0;
        width: 70px;  
        height: 70px;
        cursor: pointer;
    }

    p {
        position: absolute;
        bottom: 20px;
        left: 16vw;
        margin: 0;
        font-family: Inter, sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
        color: #A0A0A0;
    }
`

export const SignUpForm = styled.form`
    grid-area: form;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #error {
        margin: 0;
    }

    span {
        width: 440px;
        font-size: 1rem;
        /* font-weight: 500; */
        font-family: Inter, sans-serif;
        color: var(--secondary-color-3);
    }

    p {
        font-family: Inter, sans-serif;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
    }
`