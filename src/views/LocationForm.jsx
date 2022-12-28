import React from "react";
import ContinueButton from "../components/ContinueButton";
import Map from "../components/Map";
import SearchBox from "../components/SearchBox";

const LocationForm = () => {
  return (
    <div>
      <h1>¿Dónde se puede ver?</h1>
      <SearchBox />
      <Map />
      <ContinueButton />
    </div>
  );
};

export default LocationForm;
