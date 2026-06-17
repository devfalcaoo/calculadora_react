import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [pendingOperation, setPendingOperation] = useState(null);
    const [pendingValue, setPendingValue] = useState(null);
    const [completeOperation, setCompleteOperation] = useState('');

    const keypadNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const operations = ['+', '-', '*', '/'];

    const handleClear = () => {
        setCurrentValue('0');
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation('');
    };

    const handleOnClick = (val) => {
        setCurrentValue((prevValue) => (prevValue === '0' ? val : prevValue + val));
        setCompleteOperation((prevValue) => prevValue + val);
    };

    const handleOperation = (operation) => {
        if (pendingOperation && pendingValue !== null) {
            handleCalculate();
        }
        setPendingOperation(operation);
        setPendingValue(currentValue);
        setCurrentValue('0');
        setCompleteOperation((prevValue) => prevValue + ' ' + operation + ' ');
    };

    const handleCalculate = () => {
        if (!pendingOperation || pendingValue === null) {
            return;
        }

        const a = parseFloat(pendingValue);
        const b = parseFloat(currentValue);
        let result = 0;

        switch (pendingOperation) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a * b;
                break;
            case '/':
                result = b !== 0 ? a / b : 'Erro';
                break;
            default:
                return;
        }

        setCurrentValue(String(result));
        setPendingOperation(null);
        setPendingValue(null);
        setCompleteOperation('');
    };

    return (
        <div className="calculator">
            <div className="complete-operation">{completeOperation}</div>
            <div className="display">{currentValue}</div>
            <div className="buttons">
                <button onClick={handleClear}>AC</button>
                {keypadNumbers.map((num) => (
                    <button key={num} onClick={() => handleOnClick(num)}>
                        {num}
                    </button>
                ))}
                {operations.map((operation) => (
                    <button key={operation} onClick={() => handleOperation(operation)}>
                        {operation}
                    </button>
                ))}
                <button onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;