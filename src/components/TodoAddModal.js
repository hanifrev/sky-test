import Image from "next/image";
import React, { useState } from "react";
import close from "../assets/X.svg";

const TodoAddModal = () => {
  const [nameActivity, setNameActivity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    { id: 1, name: "Very High", color: "#FF0000" },
    { id: 2, name: "Item 2", color: "#000000" },
    { id: 3, name: "Item 3", color: "#3CD2AA" },
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
            <div className="dropdown flex items-center">
              <div
                className="dropdown-header"
                onClick={handleToggleDropdown}
                // style={{ backgroundColor: selectedItem?.color }}
              >
                <div className="dropdown-header-icon">
                  <span className={`chevron ${isOpen ? "up" : "down"}`}></span>
                </div>
                <div className="dropdown-header-text flex items-center -ml-[13px]">
                  <div
                    className={`mx-[14px] flex items-center w-[9px] h-[9px]  rounded-[50%] `}
                    data-cy="todo-item-priority-indicator"
                    style={{ backgroundColor: selectedItem?.color }}
                  ></div>
                  {selectedItem?.name || "Select an item"}
                </div>
              </div>
              {isOpen && (
                <ul className="dropdown-menu">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className="flex items-center"
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
            } btn text-white`}
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoAddModal;
