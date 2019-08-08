import React from 'react';

import styled from 'styled-components';

const StyledCounter = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
    border: 5px solid darkgrey;
    border-radius: 15px;
    
    span {
        font-size: 4rem;
    }
`;

export default function Display (props) {
    const { strikes, balls } = props;

    return (
        <StyledCounter>
            <span className="ball-count">{balls}</span>
            <span>-</span>
            <span className="strike-count">{strikes}</span>
        </StyledCounter>
    )
}