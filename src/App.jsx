import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <section>
      <div className='fixed -z-10 mt-[-80vh]'>
        <Header />
      </div>
       <div className='mt-[80vh]'>
        <Body />
      </div>
    </section>
  );
}

export default App;
