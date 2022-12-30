import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import add from "../assets/add-icon.ico";
import "../App.css";

const AddButton = () => {
  const { fnNewAgencie } = useContext(GlobalContext);
  return (
    <img
      src={add}
      alt=""
      className="add-icon"
      onClick={fnNewAgencie}
      type="button"
    />
  );
};

export default AddButton;
