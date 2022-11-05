import React, { useState } from "react";
import SearchBox from "./components/searchbox";
import SearchResults from "./components/search-results";
import SearchHistory from "./components/search-history";

const api = {
  key: "a7c732e941b04aa08fb4c9a8d6e1df0e",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const [history, setHistory] = useState([]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
          if (result.cod === 200) {
            setHistory((prev) => [...prev, result]);
          }
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBox query={query} setQuery={setQuery} search={search} />
        {typeof weather.main != "undefined" ? (
          <SearchResults weather={weather} dateBuilder={dateBuilder} />
        ) : (
          ""
        )}
        <div>
          <SearchHistory history={history} setWeather={setWeather} />
        </div>
      </main>
    </div>
  );
};

export default Home;
