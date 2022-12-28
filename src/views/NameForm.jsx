import React from "react";
import InputName from "../components/InputName";
import BackButton from "../components/BackButton";
import ExitButton from "../components/ExitButton";
import NextButton from "../components/NextButton";

const NameForm = () => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-5">
        <BackButton />
        <ExitButton />
      </div>

      <InputName />
      <NextButton />
    </div>
  );
};

export default NameForm;
