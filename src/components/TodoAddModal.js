import Image from "next/image";
import React, { useState } from "react";
import close from "../assets/X.svg";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
// import { IconName } from "react-icons/hi2";

const TodoAddModal = () => {
  const [nameActivity, setNameActivity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { id: 1, name: "Very High", color: "#ED4C5C", value: "very-high" },
    { id: 2, name: "High", color: "#F8A541", value: "high" },
    { id: 3, name: "Normal", color: "#00A790", value: "normal" },
    { id: 4, name: "Low", color: "#428BC1", value: "low" },
    { id: 5, name: "Very Low", color: "#8942C1", value: "very-low" },
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const circleStyle = {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    backgroundColor: "#FF0000",
  };

  return (
    <div id="add-modal-overlay">
      <div id="add-modal" data-cy="modal-add" className=" pt-[19px] xmd:pt-6">
        <div className="flex justify-between border-b border-[#e5e5e5] pb-[17px] px-[22px] xmd:px-[30px]">
          <div
            data-cy="modal-add-title"
            className="font-semibold text-base xmd:text-lg"
          >
            Tambah List Item
          </div>
          <div data-cy="modal-add-close-button">
            <Image src={close} />
          </div>
        </div>
        <div className="flex flex-col px-[22px] xmd:px-[30px] pt-[23px]">
          <label
            data-cy="modal-add-name-title"
            className="font-semibold text-[10px] xmd:text-xs pb-3 xmd:pb-[9px]"
          >
            NAMA LIST ITEM
          </label>
          <input
            data-cy="modal-add-name-input"
            placeholder="Tambahkan nama Activity"
            className="w-full border border-[#e5e5e5] p-4 rounded-r-md"
            value={nameActivity}
          />
        </div>
        <div className="pt-[23px] xmd:pt-[26px] border-b border-[#e5e5e5] px-[22px] xmd:px-[30px]">
          <label
            data-cy="modal-add-priority-title"
            className="font-semibold text-[10px] xmd:text-xs pb-3 xmd:pb-[9px]"
          >
            PRIORITY
          </label>
          <div className="mb-7 xmd:mb-[23px] h-[52px]">
            <div
              className="dropdown flex items-center"
              onClick={handleToggleDropdown}
              data-cy="modal-add-priority-dropdown"
            >
              <div
                className="dropdown-header flex justify-between w-full"

                // style={{ backgroundColor: selectedItem?.color }}
              >
                <div className="dropdown-header-text flex items-center -ml-[13px]">
                  <div
                    className={`mx-[14px] flex items-center w-[9px] h-[9px]  rounded-[50%] `}
                    data-cy="todo-item-priority-indicator"
                    style={{ backgroundColor: selectedItem?.color }}
                  ></div>
                  {selectedItem?.name || "Select an item"}
                </div>
                <div className="dropdown-header-icon flex items-center">
                  <span className={`chevron ${isOpen ? "up" : "down"}`}>
                    {isOpen ? <HiChevronUp /> : <HiChevronDown />}
                  </span>
                </div>
              </div>
              {isOpen && (
                <ul className="dropdown-menu">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className="flex items-center"
                      data-cy="modal-add-priority-item"
                    >
                      <span
                        className="color-circle"
                        // style={{ backgroundColor: item.color }}
                      ></span>
                      <div
                        className={`mx-[14px] flex items-center w-[9px] h-[9px] rounded-[50%] `}
                        data-cy="todo-item-priority-indicator"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="item-name">{item.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-[18px] xmd:pt-[15px] pr-[22px]">
          <button
            data-cy="modal-add-save-button"
            className={`${
              nameActivity ? "opacity-100" : "opacity-20"
            } btn text-white -z-10`}
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAddModal;
