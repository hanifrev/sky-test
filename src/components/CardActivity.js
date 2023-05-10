import React, { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "./Modal";
import Link from "next/link";

const CardActivity = ({ data, onDelete, toastDelete }) => {
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
    <>
      <Link href={`/detail/${data.id}`}>
        <div
          id="CardActivity"
          className="flex flex-col justify-between mt-9 xmd:mt-12 cursor-pointer"
          data-cy="activity-item"
          key={data.id}
        >
          <div
            className="font-bold text-sm xmd:text-lg"
            data-cy="activity-item-title"
          >
            {data.title}
          </div>
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
            <div
              data-cy="activity-item-delete-button"
              className="w-5 h-0 cursor-pointer"
              //   onClick={() => onDelete(data.id)}
              onClick={handleModal}
            >
              <HiOutlineTrash className="text-[#888888] w-9 xmd:w-6 xmd:h-6 -mt-[1px] xmd:-mt-[3px]" />
            </div>
          </div>
        </div>
        {openModal && (
          <Modal
            data={data.title}
            onClose={() => setOpenModal(false)}
            onDeleteActivity={handleDelete}
          />
        )}
        {/* {toast && <DeletedToast />} */}
      </Link>
    </>
  );
};

export default CardActivity;
