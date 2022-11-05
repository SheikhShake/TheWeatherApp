import React from "react";

const SearchHistory = ({ history, setWeather }) => {
  return (
    <div className="history">
      {history.map((weather, index) => {
        const name = weather.name;
        const country = weather.sys.country;
        const temp = Math.round(weather.main.temp);
        const type = weather.weather[0].main;

        return (
          <div
            className="history-card-container"
            key={index}
            onClick={() => {
              setWeather(weather);
            }}
          >
            <div className="history-card-inner">
              <div className="history-card-title">
                {name}, {country}
              </div>
              <div className="history-card-body">
                {temp}°C {type}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
