import { GoogleMap, Marker } from "@react-google-maps/api";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import AddButton from "../components/AddButton";
import ExitButton from "../components/ExitButton";
import carIcon from "../assets/car-icon.png";
import "../App.css";

const Agencies = () => {
  const { data, agencies } = useContext(GlobalContext);
  const { center } = data;
  const [agencieName, setAgencieName] = useState("");

  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <AddButton />
        <ExitButton />
      </div>

      <h2>Agencias</h2>
      <hr />
      {agencieName ? (
        <div className="agencieName">{`Titular: ${agencieName}`}</div>
      ) : (
        <div className="agencieNameEmpy"></div>
      )}

      <GoogleMap
        mapContainerStyle={{ height: "460px" }}
        center={center}
        zoom={4}
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        {agencies.map((item) => (
          <Marker
            key={item.name}
            position={item.center}
            options={{ icon: carIcon }}
            title={`Titular : ${item.name} \n ${item.address}`}
            onClick={() => setAgencieName(`${item.name} - ${item.address}`)}
          ></Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Agencies;
