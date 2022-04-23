import React from 'react';
import DateTimePretty from '../hoc/DateTimePretty';

const DataTime = (props) => {
  return (
    <p className="date">{props.date}</p>
  )
}

export default DateTimePretty(DataTime);