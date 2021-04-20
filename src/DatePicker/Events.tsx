//@ts-nocheck

import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;
// type EventsType = {
//     concert: string | never,
//     date: string
// }

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));


const Events = () => {
    const events = [
        { concert: 'Linkin Park', date: '2021-04-21' },
        { concert: 'FJK', date: '2021-04-22' },
    ];

    let newDate = events.find(({ date }) => date);


    const [dates, setDates] = useState([]);
    const [hackValue, setHackValue] = useState();
    const [value, setValue] = useState();
    const disabledDate = (current: any) => {
        if (!dates || dates.length === 0) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
    };

    console.log('dates', dates);
    // console.log('hackValue', hackValue);
    // console.log(value);
    // const res = value?.find(({ _d }) => _d)
    // console.log('MOMENT CATCH', res);
    const timePeriodOne = dates[0]?._d;
    const timePeriodTwo = dates[1]?._d;


    const getPeriodOfTime = events => moment(newDate).isBetween(timePeriodOne, timePeriodTwo);

    console.log(getPeriodOfTime(events));




    const onOpenChange = (open: any) => {
        if (open) {
            setHackValue([]);
            setDates([]);
        } else {
            setHackValue(undefined);
        }
    };

    return (
        <RangePicker
            value={hackValue || value}
            disabledDate={disabledDate}
            onCalendarChange={val => setDates(val)}
            onChange={val => setValue(val)}
            onOpenChange={onOpenChange}
        />
    );
};

// let f;

// function onChange(date: any, dateString: string): any {
//     console.log('date', dateString)
//     f = events.filter(({ date }) => date === dateString).find(({ concert }) => concert)
//     console.log('arr', f)
//     // return f;

// };

// return (
//     <div>

//         <Space direction="vertical" >
//             <DatePicker onChange={onChange} />
//         </Space>

//         {/* <div>{f?.concert}</div> */}

//     </div>


// )



// };

export default Events;