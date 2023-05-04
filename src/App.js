import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="">
      <header>
        <div className='-z-10 fixed mt-[-80vh]'>
          <Header/>
        </div>
        <div className='mt-[80vh]'>
         <Body/>
        </div>
      </header>
    </div>
  );
}

export default App;
