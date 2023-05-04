import './App.css';
import React from 'react';
import Header from './components/Header';
import Body from './components/Body';

import { useState } from "react";
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [events, setEvents] = useState([]);
  const eventsCollectionRef = collection(db, "event");

  const getEvents = async () => {
    const data = await getDocs(eventsCollectionRef);
    console.log(data.docs);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getEvents(); // fetch data when the component is rendered

  console.log(events);

  return (
    <div className="">
      <header>
        <div className='-z-10 fixed mt-[-80vh]'>
          <Header />
        </div>
        <div className='mt-[80vh]'>
          <Body />
        </div>
      </header>
    </div>
  );
}

export default App;

    // <div className="App">
    //   {events.map((event) => {
    //   return( 
    //     <div>
    //       {" "}
    //       <h1>Name: {event.name}</h1>
    //       <h1>Date: {event.date}</h1>
    //       <h1>Location: {event.location}</h1>
        
    //    </div>
    //   );
    // })}
    // </div>
