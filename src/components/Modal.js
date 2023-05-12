import Image from "next/image";
import React, { useState } from "react";
import warningIconM from "../assets/modal-delete-icon.svg";

const Modal = ({ onClose, onDeleteActivity, data }) => {
  return (
    <div id="modal-overlay" className="bg-orange-600">
      <div id="modal" className="" data-cy="modal-delete">
        <div data-cy="modal-delete-icon" className="justify-center flex pt-10">
          <Image alt="img" src={warningIconM} />
        </div>
        <div
          data-cy="modal-delete-title"
          className="text-center font-medium text-sm w-[240px] mx-auto pt-[29px] xmd:w-[365px] xmd:text-lg xmd:pt-[34px]"
        >
          Apakah anda yakin menghapus activity{" "}
          <span data-cy="" className="font-bold">
            "{data}"
          </span>
        </div>

        <div className="pt-[43px] xmd:pt-[46px] flex justify-center gap-[10px] text-base font-medium">
          <button
            className="btn bg-[#F4F4F4]"
            data-cy="modal-delete-cancel-button"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="btn bg-[#ED4C5C] text-white"
            data-cy="modal-delete-confirm-button"
            onClick={onDeleteActivity}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
