import './App.css';
import Tanggal from './components/tanggal';
import React from 'react';

function Introduction() {
    return (
        <section className='w-screen h-[100vh] bg-slate-400'>
            <div className='pb-8 pt-[3.5rem] ml-[4vh] text-white'>
                <Tanggal />
                <p className='text-[0.625rem] font-extralight mt-1'>YOGYAKARTA, INDONESIA</p>
            </div>
            <div className='py-20 border-y-[0.1rem] border-white'>
                <p className='ml-[8vh] mr-[16vh] text-[2.625rem] leading-none font-ade tracking-wider text-white'>SCROLL DOWN TO &nbsp; SEE UP COMING EVENTS</p>
            </div>
            <div className='py-8'>
                <p className='ml-[4vh] text-xs font-lato font-extrabold text-white'>CURATED BY:</p>
                <p className='mt-1 ml-[4vh] text-xs font-lato font-extrabold text-white'>JOGJA UNDERGROUND</p>
            </div>
        </section>
    );
}

export default Introduction;