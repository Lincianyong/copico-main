import React from 'react';
import Logo1 from './assets/LOGOJUWHITE.png';
import Logo2 from './assets/LOGOJUGRAYFIT.png'

function Body() {
    return (
        <section>
            <div className='w-screen py--2 bg-black rounded-t-[2rem] flex justify-center content-center'>
                <div>
                    <img className="object-contain w-[42vh] h-auto" src={Logo1} alt="JogjaUnderground Logo"></img>
                </div>
            </div>
            <div className='w-screen bg-white h-0.5'></div>
            <div className='w-screen py-10 bg-gradient-to-t from-neutral-900 to-black text-white'>
                <div className=''>
                    side scrfoll calendar
                </div>

                <p className='font-atyp text-[1.7rem] ml-[4vh]'>UP COMING EVENTS</p>

                {/* Months */}
                <div>

                    {/* Events */}
                    <div className='flex'>
                        {/* Tanggal */}
                        <div className='text-[4rem]'>
                            25
                        </div>
                        <div className='m-[5vh] h-15 border-l-[0.1rem] border-white'></div>
                        {/* Description */}
                        <div className=''>
                            <p>Arya's Party</p>
                            <p>W. 10, Manggung, Caturtunggal</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
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