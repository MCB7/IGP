import React from 'react'
import styled from 'styled-components';
import { Stage, Sprite } from '@inlet/react-pixi';


const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    text-align: center;


`;

const H1 = styled.header`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1 em;

`;

const width = 400;
const height = 400;

export const Heading = () => {
    return (
        <Header>
            <Stage>
            <Sprite
            anchor={0.5}
            scale={5}
            x={width / 2}
            y={height / 2}
            image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
          />
            </Stage>
        </Header>
    )
}

/// ABOVE IS THE REACT-PIXI STUFF LIKE SPRITE(the bunny) THE STAGE(the invisble reality that the rabbit inhabits that lays ontop of the canvas)
