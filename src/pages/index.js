import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=si&appid=b8ed96f89e3f80617b93c0952c372418";

  const fetchWeather = (e) => {
    e.preventDefault();

    axios.get(url).then((response) => {
      setLoading(true);
      setWeather(response.data);
      console.log(response.data);
    });
    setLoading(false);
  };

  return (
    <div>
      <button
        className="bg-red-600 rounded font-bold m-2 top-1 left-1 px-2 py-1"
        onClick={fetchWeather}
      >
        Fetch Data
      </button>
    </div>
  );
}
