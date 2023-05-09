import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const CardActivity = ({ data }) => {
  return (
    <div
      id="CardActivity"
      className="flex flex-col justify-between mt-9 xmd:mt-12"
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
        >
          <HiOutlineTrash className="text-[#888888] w-9 xmd:w-6 xmd:h-6 -mt-[1px] xmd:-mt-[3px]" />
        </div>
      </div>
    </div>
  );
};

export default CardActivity;
