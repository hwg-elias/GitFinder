import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 22px;
    font-family: Verdana;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: Verdana;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    text-decoration: none;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem;
    color: white;
    border-radius: .25rem;
`;

