import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ContinueButton = () => {
  const { completedAddress, btnEnabled, btnDisabled, fnNext } =
    useContext(GlobalContext);

  return (
    <button
      className={completedAddress ? btnEnabled : btnDisabled}
      disabled={!completedAddress}
      onClick={fnNext}
    >
      Continuar
    </button>
  );
};

export default ContinueButton;
