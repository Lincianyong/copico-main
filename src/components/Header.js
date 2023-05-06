import React from 'react';
import Tanggal from './Tanggal';
import Backgroundvid from './backgroundvid.mp4';

function Heading() {
    return (
        <div className='relative w-screen h-[100vh]'>
            <video autoPlay loop muted className='-z-20 absolute top-0 left-0 w-full h-full object-cover'>
                <source src={Backgroundvid} type='video/mp4' />
            </video>
            <div className='pb-8 pt-[4rem] ml-[4vh] text-white'>
                <Tanggal />
                <p className='text-[0.625rem] font-extralight mt-1'>YOGYAKARTA, INDONESIA</p>
            </div>
            <div className='py-20 border-y-[0.1rem] border-white'>
                <p className='ml-[8vh] mr-[16vh] text-[2.625rem] leading-none font-ade tracking-wider text-white'>SCROLL DOWN TO &nbsp; SEE UP COMING EVENTS</p>
            </div>
            <div className='py-8 mx-[4vh]  flex items-center justify-between'>
                <div>
                    <p className='text-xs font-lato font-extrabold text-white'>CURATED BY:</p>
                    <p className='mt-1 text-xs font-lato font-extrabold text-white'>JOGJA UNDERGROUND</p>
                </div>
                <div className='w-16 h-16'>
                    <img src="./images/button1.png" alt="button" />
                </div>
            </div>
        </div>
    );
}

export default Heading;