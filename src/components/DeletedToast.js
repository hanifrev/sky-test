import React from "react";
import icon from "../assets/modal-information-icon.svg";
import Image from "next/image";

const DeletedToast = () => {
  return (
    <div id="toastOverlay">
      <div
        id="deletedToast"
        data-cy="modal-information"
        className="flex pl-[27px]"
      >
        <Image src={icon} data-cy="modal-information-icon" />
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
