import React from "react";
import { FaPlus } from "react-icons/fa";

const ActivityHeader = ({ addActivity }) => {
  return (
    <div className="flex justify-between" id="activity-header">
      <div
        className="font-bold text-base xmd:text-4xl text-[#111111] flex items-center"
        data-cy="activity-title"
      >
        Activity
      </div>
      <button
        className="add-btn  text-white"
        data-cy="activity-add-button"
        onClick={addActivity}
      >
        <FaPlus />
        <span className="text-xs xmd:text-lg">Tambah</span>
      </button>
    </div>
  );
};

export default ActivityHeader;
