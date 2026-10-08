import './App.css'
import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}

function CalcButtons({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}

function App() {

  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }

    console.log(num1 + "|" + op + "|" + num2 + "|" + disp);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setOp(value);
    setDisp(value);
  }

  const eqClickHandler = (e) => {
    e.preventDefault();

    if (num1 === null || num2 === null || op === null) {
      return;
    }

    let result;

    if (op === "+") {
      result = parseFloat(num1) + parseFloat(num2);
    } else if (op === "-") {
      result = parseFloat(num1) - parseFloat(num2);
    } else if (op === "*") {
      result = parseFloat(num1) * parseFloat(num2);
    } else if (op === "÷") {
      if (parseFloat(num2) === 0) {
        setDisp("Error");
        return;
      }
      result = parseFloat(num1) / parseFloat(num2);
    }

    setDisp(result);
    setNum1(result.toString());
    setNum2(null);
    setOp(null);
  }

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const surnameClickHandler = (e) => {
    e.preventDefault();
    setDisp("John Lloyd Mariano");
  }

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of John Lloyd Mariano - DA3A
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />

        <div className='CalcButtons'>
          <CalcButtons label={'7'} onClick={numClickHandler} />
          <CalcButtons label={'8'} onClick={numClickHandler} />
          <CalcButtons label={'9'} onClick={numClickHandler} />
          <CalcButtons label={'÷'} onClick={opClickHandler} />

          <CalcButtons label={'4'} onClick={numClickHandler} />
          <CalcButtons label={'5'} onClick={numClickHandler} />
          <CalcButtons label={'6'} onClick={numClickHandler} />
          <CalcButtons label={'*'} onClick={opClickHandler} />

          <CalcButtons label={'1'} onClick={numClickHandler} />
          <CalcButtons label={'2'} onClick={numClickHandler} />
          <CalcButtons label={'3'} onClick={numClickHandler} />
          <CalcButtons label={'-'} onClick={opClickHandler} />

          <CalcButtons
            label={'C'}
            buttonClassName="ClearButton"
            onClick={clrClickHandler}
          />

          <CalcButtons label={'0'} onClick={numClickHandler} />
          <CalcButtons label={'='} onClick={eqClickHandler} />
          <CalcButtons label={'+'} onClick={opClickHandler} />
        </div>

        <CalcButtons
          label={'Mariano'}
          buttonClassName="SurnameButton"
          onClick={surnameClickHandler}
        />
      </div>
    </div>
  )
}

export default App

