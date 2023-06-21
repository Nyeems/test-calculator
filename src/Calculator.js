import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Erroerrerr');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="keypad">
        <button className="highlight" name="7" onClick={handleClick}>
          7
        </button>
        <button className="highlight" name="8" onClick={handleClick}>
          8
        </button>
        <button className="highlight" name="9" onClick={handleClick}>
          9
        </button>
        <button className="operator" name="/" onClick={handleClick}>
          ÷
        </button>
        <button className="highlight" name="4" onClick={handleClick}>
          4
        </button>
        <button className="highlight" name="5" onClick={handleClick}>
          5
        </button>
        <button className="highlight" name="6" onClick={handleClick}>
          6
        </button>
        <button className="operator" name="*" onClick={handleClick}>
          ×
        </button>
        <button className="highlight" name="1" onClick={handleClick}>
          1
        </button>
        <button className="highlight" name="2" onClick={handleClick}>
          2
        </button>
        <button className="highlight" name="3" onClick={handleClick}>
          3
        </button>
        <button className="operator" name="-" onClick={handleClick}>
          -
        </button>
        <button className="highlight" name="0" onClick={handleClick}>
          0
        </button>
        <button className="highlight" name="." onClick={handleClick}>
          .
        </button>
        <button className="operator" onClick={clear}>
          C
        </button>
        <button className="operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
