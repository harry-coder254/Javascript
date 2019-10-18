import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
     
     <Welcome name='Diana' heroName='WonderWoman' />
     {/*<Greet name='Bruce'>
       <p>This is children props</p>
       </Greet>
     <Greet name='Jase'>
       <button>Click</button>
     </Greet>
  <Greet name='Clark' heroName='Superman'/>
    <Message />*/}

    </div>
  );
}

export default App;
