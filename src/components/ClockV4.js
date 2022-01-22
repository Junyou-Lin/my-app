import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import "../css/clock.css";
const ClockV4 = () => {
  const data = [
    {
      id: 1,
      name: "Melbourne",
      date: moment().tz("Australia/Melbourne").format("dddd MMM Do YYYY"),
      hour: moment().tz("Australia/Melbourne").format("h"),
      minute: moment().tz("Australia/Melbourne").format("mm"),
      second: moment().tz("Australia/Melbourne").format("ss"),
    },
    {
      id: 2,
      name: "Tokyo",
      date: moment().tz("asia/tokyo").format("dddd MMM Do YYYY"),
      hour: moment().tz("asia/tokyo").format("h"),
      minute: moment().tz("asia/tokyo").format("mm"),
      second: moment().tz("asia/tokyo").format("ss"),
    },
  ];

  const [cities, setCities] = useState(data);

  useEffect(() => {
    setInterval(() => {
      const currentCityTime = [
        {
          id: 1,
          name: "Melbourne",
          date: moment().tz("Australia/Melbourne").format("dddd MMM Do YYYY"),
          hour: moment().tz("Australia/Melbourne").format("h"),
          minute: moment().tz("Australia/Melbourne").format("mm"),
          second: moment().tz("Australia/Melbourne").format("ss"),
        },
        {
          id: 2,
          name: "Tokyo",
          date: moment().tz("asia/tokyo").format("dddd MMM Do YYYY"),
          hour: moment().tz("asia/tokyo").format("h"),
          minute: moment().tz("asia/tokyo").format("mm"),
          second: moment().tz("asia/tokyo").format("ss"),
        },
      ];
      setCities(currentCityTime);
    }, 1000);
  }, []);

  return (
    <>
      {cities.map((city) => {
        const { id, name, date, hour, minute, second } = city;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <div className="clock">
              <p className="date">{date}</p>
              <div className="time">
                <p className="time-number">{hour}</p>
                <p>:</p>
                <p className="time-number">{minute}</p>
                <p>:</p>
                <p className="time-number">{second}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ClockV4;
