import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const BackButton = () => {
  const { setStep, step } = useContext(GlobalContext);

  return (
    <div className="d-flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#584499"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={() => setStep(step - 1)}
        type="button"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    </div>
  );
};

export default BackButton;
