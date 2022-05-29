import logo from "./graphic/figure.png";
import logo1 from "./graphic/logo1.svg";
import React from 'react';
import AddInputForm from "./AddInputForm";
import {Input} from './Input';
import  {InputsList} from './InputsList';
import './App.scss';
import useInputs from "./useInputs";
import ExchangeRates from "./Exchange";

interface InputProps {
}

export const App: React.FC<InputProps> = () => {
    const { addInput, removeInput, InputsDataList,} = useInputs();
  return (
      <main>
          <div className ="futureTable">
              <img src={logo1} className="Binance-logo" alt="logo2" />
              <h1>Now you can track all your cryptos here!</h1>
              <p>Just enter the cryptocurrency code on the form to the right</p>
                  <div className="table"></div> <ExchangeRates/>
          </div>

          <div className="row">
           <InputsList InputsData={InputsDataList} onRemove={(index) => removeInput(index)} />
          </div>

          <div className="Input-Form">
              <AddInputForm onChange={Input => addInput(Input)} />
          </div>

          <div className="Logo">
              <footer className="App-logo">
                  <img src={logo} className="App-logo" alt="logo" />
              </footer>
          </div>
             <footer className="footer">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nisi eget augue consectetur tincidunt euismod vel nunc. Fusce sodales vitae ligula sed lobortis. Praesent orci risus, consectetur commodo urna et, tempus suscipit metus. Cras rutrum suscipit pellentesque. Praesent eget finibus risus. Suspendisse sollicitudin felis dignissim hendrerit mollis. Aliquam vel iaculis tellus.
             </footer>
  </main>
  );
}

export default App;
