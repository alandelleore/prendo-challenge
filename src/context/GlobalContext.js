import React, { createContext, useState } from "react";

export const GlobalContext = createContext({})

export default function GlobalContextProvider({children}) {

  const [step, setStep] = useState(1);
  const [completedAddress, setCompletedAddress] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [agencies, setAgencies] = useState([]);

  const [data, setData] = useState({
    center: {lat: -36.13722355808068, lng: -61.329963726387064},
    name: null,
    address: null
  })

  const btnDisabled = 'btn btn-outline-light disabled btn-lg text-white col-12 mt-4'
  const btnEnabled = 'btn btn-info btn-lg text-white col-12 mt-4'

  const edit = () => {
    setEditMode(true);
    setCompletedAddress(false);
  };

  const fnNext = () => {
    setStep(step + 1)
  }

  const fnConfirm = () => {
    setAgencies([...agencies, data])
    fnNext()
  }

  const fnNewAgencie = () => {
    setData({center: {lat: -32.85672187197205, lng: -61.150679837487765},
      name: null,
      address: null})
    setStep(1)
    edit()
  }



  return (
    <GlobalContext.Provider 
      value={{ btnDisabled,
               btnEnabled,
               step, 
               setStep, 
               completedAddress, 
               setCompletedAddress, 
               edit, editMode,setEditMode, 
               data, 
               setData, 
               agencies, 
               setAgencies, 
               fnNext, 
               fnConfirm, 
               fnNewAgencie}}>
      {children}
    </GlobalContext.Provider>
  )
}