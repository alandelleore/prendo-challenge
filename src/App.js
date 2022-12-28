import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

import NameForm from "./views/NameForm";
import LocationForm from "./views/LocationForm";
import SuccessMessage from "./views/SuccessMessage";
import Agencies from "./views/Agencies";
import "./App.css";

const App = () => {

const {step} = useContext(GlobalContext)

  const getCompStep = () => {
    switch (step) {
      case 1: 
        return <LocationForm />;
      case 2: 
        return <NameForm />;
      case 3:
        return <SuccessMessage/>;
      case 4:
        return <Agencies/>;
      default:
        return <LocationForm/>;
    }
  }

  return (
    <div className='container p-4 mt-2 col-md-5'>
      
      <>{getCompStep()}</>
  
    </div>
  )
}

export default App