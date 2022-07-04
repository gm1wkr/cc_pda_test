import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  
  it('should add 1 to four', () => {
    const button1 = container.getByTestId('number1');
    const add_button = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add_button);
    fireEvent.click(button4);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7', () => {
    const button4 = container.getByTestId('number4');
    const sub_button = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(sub_button);
    fireEvent.click(button4);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('multiply 3 by 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const multiply_button = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(multiply_button);
    fireEvent.click(button3);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divide_button = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide_button);
    fireEvent.click(button7);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('concatenate multiple number button clicks', () => {
    const button5 = container.getByTestId('number5');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(button4);
    fireEvent.click(button3);
    fireEvent.click(button2);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('54321');
  })

  it('chain multiple operations together', () => {
    const button5 = container.getByTestId('number5');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const button0 = container.getByTestId('number0');
    const divide_button = container.getByTestId('operator-divide');
    const add_button = container.getByTestId('operator-add');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(divide_button);
    fireEvent.click(button4);
    fireEvent.click(add_button);
    fireEvent.click(button5);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('10');
  })

  it('clear the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const button0 = container.getByTestId('number0');
    const divide_button = container.getByTestId('operator-divide');
    const add_button = container.getByTestId('operator-add');
    const equall_button = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    fireEvent.click(button2);
    fireEvent.click(button0);
    fireEvent.click(divide_button);
    fireEvent.click(button4);
    fireEvent.click(add_button);
    fireEvent.click(button3);
    fireEvent.click(clear);
    fireEvent.click(equall_button);
    expect(runningTotal.textContent).toEqual('5');
  })
})

