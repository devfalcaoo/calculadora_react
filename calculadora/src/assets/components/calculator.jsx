import React from 'react';
import useState from 'react';
import './calculator.css';

const Calculator = () => {
    const keypadNumbers = ['1','2','3','4','5','6','7','8','9','0'];
    const Operations = ['+','-','*','/'];

    return <div className="calculator">
        <div className="complate-corporation">3 + 3 = 6</div>
        <div className="display">6</div>
        <div className="buttons">
            {keypadNumbers.map(num => (
                <button key={num}>{num}</button>
            ))}
            
        </div>
        <button>=</button>
    </div>;
}

export default Calculator