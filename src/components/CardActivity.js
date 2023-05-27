import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "./Modal";
import Link from "next/link";

const CardActivity = ({ data, theId, onDelete, toastDelete }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleDelete = () => {
    onDelete(data.id);
    setOpenModal(false);
    toastDelete(true);
  };

  return (
    <div
      id="CardActivity"
      className="flex flex-col justify-between cursor-pointer"
      data-cy="activity-item"
      key={data.id}
    >
      <Link href={`/detail/${theId}`}>
        <div
          className="font-bold text-sm xmd:text-lg h-24"
          data-cy="activity-item-title"
        >
          {data.title}
        </div>
      </Link>
      <div className="flex flex-row justify-between">
        <div
          className="text-[#888888] font-medium text-[10px] xmd:text-sm"
          data-cy="activity-item-date"
        >
          {new Date(data.created_at).toLocaleDateString("en-UK", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="w-5 h-0 cursor-pointer" onClick={handleModal}>
          <HiOutlineTrash
            data-cy="activity-item-delete-button"
            className="text-[#888888] w-9 xmd:w-6 xmd:h-6 -mt-[1px] xmd:-mt-[3px]"
          />
        </div>
      </div>
      {openModal && (
        <Modal
          data={data.title}
          onClose={() => setOpenModal(false)}
          onDeleteActivity={handleDelete}
        />
      )}
    </div>
  );
};

export default CardActivity;
