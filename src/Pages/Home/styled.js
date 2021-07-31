import styled from 'styled-components';


export const HomeCtainer = styled.div`
    displey: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    transform: translate(-50%,-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Ctainer = styled.div`

`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem
    border-radius: .25rem 0 0 .25rem;

    &: focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.7rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &: focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-family: Verdana;
    margin-top: 1rem;
    font-size: .80rem;
    color: red;
    font-weight: bold;
`