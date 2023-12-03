import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b8ed96f89e3f80617b93c0952c372418`;

  const fetchWeather = (e) => {
    e.preventDefault();

    axios.get(url).then((response) => {
      setLoading(true);
      setWeather(response.data);
      //console.log(response.data);
    });
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Weather-App</title>
      </Head>
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]  bg-black/50 " />
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1689600399375-33d9c1388dba?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Landscape"
        layout="fill"
        className=" relative object-cover"
      />

      <div className="relative flex justify-between m-auto text-white w-full p-4 max-w-[500px] z-10">
        <form className="flex justify-between m-auto p-3 w-full border border-gray-300 rounded-2xl">
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className=" bg-transparent border-none focus:outline-none text-2xl"
              type="text"
              placeholder="Enter City"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={25} />
          </button>
        </form>
      </div>
      {/* Weather */}
      {weather.main && <Weather data={weather} />}
    </div>
  );
}
