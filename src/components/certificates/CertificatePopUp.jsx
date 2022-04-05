import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function CertificatePopUp({ data, setProp }) {
  const handleCloseEvent = () => setProp(false);
  return (
    <div className="cer__pop">
      <img src={data} alt="" />

      <div className="cer__overlay" onClick={handleCloseEvent}>
        <FontAwesomeIcon
          onClick={handleCloseEvent}
          className="cer__xmark"
          icon={faXmark}
        />
      </div>
    </div>
  );
}

export default CertificatePopUp;
