import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import pencil from "../assets/pencil.svg";
import sortBtn from "../assets/sort-button.svg";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { updateActivity } from "../utils/api";
import TodoAddModal from "./TodoAddModal";
import SortDropdown from "./SortDropdown";

const TodoHeader = ({
  theData,
  theTitle,
  theId,
  reFetch,
  onOptionSelect,
  selectedOption,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(theTitle);
  const [openModal, setOpenModal] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const updatedValue = e.target.value;
    setValue(updatedValue);
    updateActivity(updatedValue, theId);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleSortModal = () => {
    setOpenSort(!openSort);
  };

  const propModal = () => {
    setOpenModal(true);
    return propModal;
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
            <Image alt="img" src={pencil} className="xmd:w-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-8 gap-2 xmd:pt-0 xmd:gap-[18px]">
        {/* if data available, sort = true */}
        <div data-cy="todo-sort-button" onClick={handleSortModal}>
          <Image alt="img" src={sortBtn} className="xmd:w-[54px]" />
        </div>
        <button
          className="add-btn  text-white"
          data-cy="activity-add-button"
          onClick={handleModal}
        >
          <FaPlus />
          <span className="text-xs xmd:text-lg">Tambah</span>
        </button>
      </div>
      {openSort && (
        <SortDropdown
          onOptionSelect={onOptionSelect}
          selectedOption={selectedOption}
          onClose={() => setOpenSort(false)}
        />
      )}
      {openModal && (
        <TodoAddModal
          idParams={theId}
          onClose={() => setOpenModal(false)}
          onTodoAdded={reFetch}
        />
      )}
    </div>
  );
};

export default TodoHeader;
