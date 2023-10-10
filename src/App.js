import Input from './components/Input'
import Button from './components/Button'
import ButtonOper from './components/Button/ButtonOper'
import { Container,Content,Row } from './styles.js';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('0');
  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('0');
  };
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${trataPrev(number,prev)}`)
  };
  const trataPrev = (number,prev) => {
    let opers = ['+','-','*','/','%','√','x²'];
    if (number === '=') {
      opers.map(function(simboloper, i) {
        if (prev.includes(simboloper)) {
          handleCalcNumbers(simboloper);
        }  
      })
    }
    if (!prev.includes('.')) {
      if (number === '.' && prev === ''){
        prev = '0';
      } 
    } else if (number === '.' && (!prev.includes('+'))) {
      number = '';
    }
    return prev + number;
  };

  const handleCalcNumbers = (operator) => {
      let nrAtu = currentNumber.split(operator);
      let result = 0;
      switch (operator) {
        case '+':
          result = Number(nrAtu[0]) + Number(nrAtu[1]);
        break;
        case '-':
          result = Number(nrAtu[0]) - Number(nrAtu[1]);
        break;
        case '*':
          result = Number(nrAtu[0]) * Number(nrAtu[1]);
        break;
        case '/':
          result = Number(nrAtu[0]) / Number(nrAtu[1]);
        break;
        case '%':
          result =  (Number(nrAtu[1]) / 100) * Number(nrAtu[0]);
        break;
        case '√':
          result =  Math.sqrt(Number((nrAtu[0] === '')?nrAtu[1]:nrAtu[0]));
        break;
        case 'x²':
          let self = (nrAtu[0] === '') ? nrAtu[1] : nrAtu[0];
          result =  Number(self) * Number(self);
        break;
      }
      setFirstNumber(String(result));
      setCurrentNumber(String(result));
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <ButtonOper label="%" onClick={() => handleAddNumber('%')} />
          <ButtonOper label="x²" onClick={() => handleAddNumber('x²')} />
          <ButtonOper label="√" onClick={() => handleAddNumber('√')} />
          <ButtonOper label="/" onClick={() => handleAddNumber('/')} />
          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <ButtonOper label="*" onClick={() => handleAddNumber('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <ButtonOper label="+" onClick={() => handleAddNumber('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <ButtonOper label="-" onClick={() => handleAddNumber('-')} />
        </Row>
        <Row>
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={() => handleOnClear('')} />
          <ButtonOper label="=" onClick={() => handleAddNumber('=')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
