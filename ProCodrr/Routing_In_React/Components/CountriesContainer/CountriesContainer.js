import React, { useEffect, useState } from "react";
import CountriesData from "../../CountriesData";
import CountryCard from "../CountryCard/CountryCard";

export default function CountriesContainer({query}) {

 const [countryData, setCountryData] = useState([])

  // useEffect(() => {
  //   fetch()

  // }, [])


  
  const arr = CountriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country, index) => {
    return (
      <CountryCard 
        key={index}
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={ country.capital?.[0] }
      />
    );
  });

  return (
    <>
      <div className="countries-container">
      {arr}
      </div>;
    </>
  )
}
