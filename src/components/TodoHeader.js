import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import pencil from "../assets/pencil.svg";
import sortBtn from "../assets/sort-button.svg";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const TodoHeader = ({ theData, theTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(theTitle);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div
      id="todoHeader"
      className="flex flex-col xmd:flex-row xmd:justify-between"
    >
      <div className="flex items-center">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <div
              className="flex items-center cursor-pointer"
              data-cy="todo-back-button"
            >
              <Link href="/">
                <MdOutlineArrowBackIos />
              </Link>
            </div>

            {isEditing ? (
              <input
                type="text"
                value={value}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="bg-transparent text-base xmd:text-4xl font-semibold ml-2 xmd:ml-5 border-b-2 border-[#D8D8D8] focus:outline-none w-full"
              />
            ) : (
              <div
                className="font-semibold text-base xmd:text-4xl ml-2 xmd:ml-5"
                onClick={handleTitleClick}
                data-cy="todo-title"
              >
                {value}
              </div>
            )}
          </div>
          <div
            data-cy="todo-title-edit-button"
            onClick={handleTitleClick}
            className="cursor-pointer xmd:flex xmd:pl-6"
          >
            <Image src={pencil} className="xmd:w-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-8 gap-2 xmd:pt-0 xmd:gap-[18px]">
        {/* if data available, sort = true */}
        <div data-cy="todo-sort-button">
          <Image src={sortBtn} className="xmd:w-[54px]" />
        </div>
        <button
          className="add-btn  text-white"
          data-cy="activity-add-button"
          //   onClick={addActivity}
        >
          <FaPlus />
          <span className="text-xs xmd:text-lg">Tambah</span>
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;