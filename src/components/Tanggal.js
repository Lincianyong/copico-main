import React from 'react';

function Tanggal() {
    const d = new Date()
    const dateDay = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const dateMonth = ['JANUARY', 'FEBUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    var day = dateDay[d.getDay()]
    var months = dateMonth[d.getMonth()]
    var year = d.getFullYear()
    var date = d.getDate()

    return (
        <div className='text-xs font-lato font-extrabold text-white'>
            <div>{day},&nbsp;&nbsp;{months}&nbsp;&nbsp;{date}&nbsp;&nbsp;{year}</div>
        </div>

    );
}

export default Tanggal;