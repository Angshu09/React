import React, { useState } from "react";
import { useEffect } from "react";
import CountriesData from "../../CountriesData";
import CountryCard from "../CountryCard/CountryCard";
import CountriesContainerShimmer from "../CountriesContainerShimmer/CountriesContainerShimmer";

export default function CountriesContainer({ query }) {
  
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log("HI" + count)

  //   const intervalId = setInterval(() => {
  //     console.log("this is interval")
  //   }, [1000])

  //   return () => {
  //     clearInterval(intervalId)
  //     console.log("interval stopped")
  //   }

  // }, [])

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/JayaSaha811733/ReimagineAPI/main/Country.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  // const arr = CountriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country, index) => {
  //   return (
  //     <CountryCard
  //       key={index}
  //       name={country.name.common}
  //       flag={country.flags.svg}
  //       population={country.population}
  //       region={country.region}
  //       capital={ country.capital?.[0] }
  //     />
  //   );
  // });

  return (
    <>
      {!countryData.length ? (
        <CountriesContainerShimmer />
      ) : (
        <div className="countries-container">
          {countryData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country, index) => {
              return (
                <CountryCard
                  key={index}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data = {country}
                />
              );
            })}
        </div>
      )}
    </>
  );
}
