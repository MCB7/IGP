import React from 'react'
import styled from 'styled-components';

const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;


`;

const H1 = styled.header`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1 em;

`;

export const Heading = () => {
    return (
        <Header>
            <h1>ALEXIS SKINNER</h1>
            <p>HAIR STYLIST</p>
        </Header>
    )
}
