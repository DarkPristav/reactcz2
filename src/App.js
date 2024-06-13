import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('Učím se React');
  const [buttonText, setButtonText] = useState("Text tlačítka")

  const buttonHandler = () => {
    setTitle('Nový text v proměnné');
  };
  const buttonHandler2 = () => {
    setTitle('Super nový text v proměnné');
  };
  const changeButtonText = () => {
    setButtonText('Nový text v tlačítku');
  };
  const changeBack = () => {
    setTitle('Učím se React');
  };
  const deleteTitle = () => {
    setTitle('');
  };

  return (
    <div className="changer">
      <h1>{title}</h1>
      <button onClick={buttonHandler}>Klikni</button>
      <button onClick={buttonHandler2}>Opět změnit title</button>
      <button onClick={deleteTitle}>Vymazat title</button>
      <button onClick={changeBack}>Výchozí stav</button>
      <button onClick={changeButtonText}>{buttonText}</button>
    </div>
  );
};

export default App;
