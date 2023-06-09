import React from 'react';
import Logo1 from './assets/LOGOJUWHITE.png';
import Logo2 from './assets/LOGOJUGRAYFIT.png'
import { useState } from "react";
import { db } from './firebase-config';
import { collection, getDocs } from "firebase/firestore";
import '../App.css';
 


function Body() {
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
        <section>
            <div className='w-screen py--2 bg-black rounded-t-[2rem] flex justify-center content-center'>
                <div>
                    <img className="object-contain w-[42vh] h-auto" src={Logo1} alt="JogjaUnderground Logo"></img>
                </div>
            </div>
            <div className='w-screen bg-white h-0.5'></div>
            <div className='w-screen py-10 bg-gradient-to-t from-neutral-900 to-black text-white'>
                
                <div>
                    {/* side scrfoll calendar */}
                </div>

                {/* Overall margin */}
                <div className='mx-[34px]'>
                <p className='font-atyp text-[24px] font-normal'>UP COMING EVENTS</p>

                    {/* Months */}
                    <div>
                    <p className='font-atyp text-[36px] font-medium opacity-70'>JANUARY</p>
                        {/* Events */}
                        
                        <div className='flex mt-3 mb-5'>
                            {/* Tanggal */}
                            <div className='text-[96px] rotate-[-90deg] font-bold font-atyp -ml-5'>
                                25
                            </div>
                            <div className='border-r-2 h-auto mx-[15px]'></div>
                            {/* Description */}
                            <div className='mx-[16px] items-center'>
                                <p className=' font-atyp font-medium text-[24px]'>Arya's Party</p>
                                <p className=' font-atyp text-[13px]'>W. 10, Manggung, Caturtunggal</p>
                                <p className=' font-atyp text-[11px] mt-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </div>

                        </div>

                        <div className='flex mt-3 mb-5'>
                            {/* Tanggal */}
                            <div className='text-[96px] rotate-[-90deg] font-bold font-atyp -ml-5'>
                                30
                            </div>
                            <div className='border-r-2 h-auto mx-[15px]'></div>
                            {/* Description */}
                            <div className='mx-[16px] items-center'>
                                <p className=' font-atyp font-medium text-[24px]'>Kimi's Party</p>
                                <p className=' font-atyp text-[13px]'>Lantai Bumi, Manggung, Caturtunggal</p>
                                <p className=' font-atyp text-[11px] mt-[5px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                            </div>

                        </div>
                        
                        


                    </div>
                </div>
                
            </div>
            <div className='w-screen h-auto bg-black px-4 py-6'>
                <div>
                    <img className="object-contain w-[30vh] h-auto" src={Logo2} alt="JogjaUnderground Logo"></img>
                </div>
            </div>
        </section>
    );
}

export default Body;