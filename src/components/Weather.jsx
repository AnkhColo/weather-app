import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-white z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-4xl">{data.weather[0].main}</p>
        </div>
        <p className="text-8xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}
      <div className="relative p-8 bg-black/40 m-10 rounded-lg">
        <p className="text-3xl pb-8 text-center font-bold">
          Weather in {data.name}
        </p>
        <div className="flex justify-between text-center ">
          <div>
            <p className="text-xl">Feels Like</p>
            <p className="text-2xl font-bold">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
          </div>
          <div>
            <p className="text-xl">Humidity</p>
            <p className="text-2xl font-bold">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="text-xl">Winds</p>
            <p className="text-2xl font-bold">
              {data.wind.speed.toFixed(0)}KMH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
