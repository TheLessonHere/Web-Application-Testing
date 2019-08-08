import React from 'react';

export default function Dashboard (props) {
    const { strikeSetter, strikes, ballSetter, balls } = props;

    const strikeHandler = () => {
        strikes === 3 ? () => strikeSetter(0) : () => strikeSetter(strikes + 1);
    }

    const ballHandler = () => {
        balls === 4 ? () => ballSetter(0) : () => ballSetter(balls + 1);
    }

    const foulHandler = () => {
        strikes === 2 ? () => strikeSetter(2) : () => strikeSetter(strikes + 1);
    }

    const hitHandler = () => {
        strikeSetter(0);
        ballSetter(0);
    }

    return (
        <div className="dashboard-container">
            <button className="Strike" onClick={strikeHandler}>Strike</button>
            <button className="Ball" onClick={ballHandler}>Ball</button>
            <button className="Foul" onClick={foulHandler}>Foul</button>
            <button className="Hit" onClick={hitHandler}>Hit</button>
        </div>
    )
}