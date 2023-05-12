import React from "react";
import icon from "../assets/modal-information-icon.svg";
import Image from "next/image";

const DeletedToast = ({ closeToast }) => {
  return (
    <div id="toastOverlay" onClick={closeToast}>
      <div
        id="deletedToast"
        data-cy="modal-information"
        className="flex pl-[27px]"
      >
        <Image alt="img" src={icon} data-cy="modal-information-icon" />
        <div
          className="flex items-center pl-[10px]"
          data-cy="modal-information-title"
        >
          Activity berhasil dihapus
        </div>
      </div>
    </div>
  );
};

export default DeletedToast;
