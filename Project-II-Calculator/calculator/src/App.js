import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="main-container">
      <div className="display">
        <CalculatorDisplay className="container"/>
      </div>
      <div className="top-buttons">

          <ActionButton text="clear" className="action"/>
          <NumberButton  number="/" className="numberButtons"/>
      </div>
      <div className="numberButtons">
      <div className="rowOne">
        <NumberButton  number="7" className="buttons"/>
        <NumberButton number="8" className="buttons"/>
        <NumberButton  number="9" className="buttons"/>
        <NumberButton  number="X" className="operationButton"/>
      </div>
      <div className="rowTwo">
        <NumberButton number="4" className="buttons"/>
        <NumberButton  number="5" className="buttons"/>
        <NumberButton number="6" className="buttons"/>
        <NumberButton  number="-" className="operationButton"/>
      </div>
      <div className="rowThree">
        <NumberButton  number="1" className="buttons"/>
        <NumberButton number="2" className="buttons"/>
        <NumberButton  number="3" className="buttons"/>
        <NumberButton  number="+" className="operationButton"/>
      </div>
      <div className="zero">
        <ActionButton text="0" className='action'/>
        <NumberButton  number="=" className="operationButton"/>
        </div>
      </div>
    </div>
  );
};

export default App;
