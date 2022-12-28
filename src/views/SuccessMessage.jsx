import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CheckLogo from "../components/CheckLogo";
import BackButton from "../components/BackButton";
import ExitButton from "../components/ExitButton";

const SuccessMessage = () => {
  const { data, btnEnabled, fnConfirm } = useContext(GlobalContext);

  return (
    <>
      <div className="d-flex justify-content-between mb-5">
        <BackButton />
        <ExitButton />
      </div>
      <div className="success">
        <div className="d-flex">
          <div>
            <h3 className="mt-1">Agencia</h3>
          </div>
          <div className="m-2">
            <CheckLogo />
          </div>
        </div>

        <hr className="mb-4" />
        <p>Titular: {data.name}</p>
        <p>Dirección: {data.address}</p>
        <p>Lat: {data.center.lat}</p>
        <p>Lng: {data.center.lng}</p>
        <button className={btnEnabled} onClick={fnConfirm}>
          Confirmar
        </button>
      </div>
    </>
  );
};

export default SuccessMessage;
