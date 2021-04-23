import styled from 'styled-components';

export const ModalContainer = styled.div`
    background: var(--primary-color-3);
    height: 54vh;
    position: absolute;
    top: 15%;
    left:50%;
    transform: translate(-50%, -50%); 
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    
    p {
        font-size: 1.2rem;
        margin: 0;
        margin-top: 6px;
        font-weight: 600;
        font-family: Inter, sans-serif;
        color: var(--secondary-color-3);
        cursor: pointer;
    }
`

export const Title = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 600;
    font-size: 2rem;
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;

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

export const ModalBtn = styled.button`
    width: 220px;
    height: 55px;
    background: var(--primary-color-7);
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    color: #fff;
    border: none;
    border-radius: 8px;
    margin-top: 10px;
    cursor: pointer;
`

export const Input = styled.input`
    width: 360px;
    height: 50px;
    background: #FFF;
    border: 2px solid #90E0EF;
    box-sizing: border-box;
    border-radius: 6px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 1.1rem;
    padding: 8px 20px;
    margin-top: 8px;
`