import React, { useState } from "react";
import utils from "./utils";

const StarsDisplay = props => (
    <>
        {utils.range(1, props.count).map(starId => (
            <div key={starId} className="star" />
        ))}
    </>
);

const PlayNumer = ({ number }) => {
    return (
        <button className="number" onClick={() => console.log(number)}>{number}</button>
    );
}


const StarMatch = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    return (
        <div className="game">
            <div className="help"> Pick one or more numbers that sum to the number of stars</div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={stars} />
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumer key={number} number={number} />
                    )}
                </div>
            </div>
            <div className="timer">Time remaining: 10</div>
        </div>
    );
}
// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
export default StarMatch;

