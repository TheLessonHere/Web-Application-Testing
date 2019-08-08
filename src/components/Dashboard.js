import React from 'react';

import styled from 'styled-components';

const StyledCounter = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        padding: 15px 20px 15px 20px;
        background: whitesmoke;
        border: 3px solid darkgrey;
        border-radius: 10px;
        color: black;
    }
`;

export default function Dashboard (props) {
    const { strikeSetter, strikes, ballSetter, balls } = props;

    const strikeHandler = () => {
        if (strikes === 2) 
        {strikeSetter(0);} 
        else 
        {strikeSetter(strikes + 1);};
    }

    const ballHandler = () => {
        if (balls === 3) 
        {ballSetter(0);} 
        else 
        {ballSetter(balls + 1);};
    }

    const foulHandler = () => {
        if (strikes === 2) 
        {strikeSetter(2);} 
        else 
        {strikeSetter(strikes + 1);};
    }

    const hitHandler = () => {
        strikeSetter(0);
        ballSetter(0);
    }

    return (
        <StyledCounter>
            <button className="Strike" onClick={strikeHandler}>Strike</button>
            <button className="Ball" onClick={ballHandler}>Ball</button>
            <button className="Foul" onClick={foulHandler}>Foul</button>
            <button className="Hit" onClick={hitHandler}>Hit</button>
        </StyledCounter>
    )
}