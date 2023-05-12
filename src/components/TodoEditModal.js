import Image from "next/image";
import React, { useEffect, useState } from "react";
import close from "../assets/X.svg";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import items from "../data/Items";
import { addTodo, updateTodoTitlePriority } from "../utils/api";

const TodoEditModal = ({
  onClose,
  idParams,
  onTodoEdited,
  titleEdit,
  priorityEdit,
}) => {
  const [nameActivity, setNameActivity] = useState(titleEdit);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [thePriority, setThePrioriy] = useState(priorityEdit);
  const [color, setColor] = useState();
  const [priorityValue, setPriorityValue] = useState();

  //   const test = "1233";

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setThePrioriy(item.name);
    setColor(item.color);
    setPriorityValue(item.value);
    setIsOpen(false);
  };

  priorityValue;

  useEffect(() => {
    if (thePriority == "very-high") {
      setThePrioriy("Very High");
      setColor("#ED4C5C");
      setPriorityValue("very-high");
    } else if (thePriority == "high") {
      setThePrioriy("High");
      setColor("#F8A541");
      setPriorityValue("high");
    } else if (thePriority == "normal") {
      setThePrioriy("Normal");
      setColor("#00A790");
      setPriorityValue("normal");
    } else if (thePriority == "low") {
      setThePrioriy("Low");
      setColor("#428BC1");
      setPriorityValue("low");
    } else if (thePriority == "very-low") {
      setThePrioriy("Very Low");
      setColor("#8942C1");
      setPriorityValue("very-low");
    }
  }, []);

  const addTodoList = async () => {
    await updateTodoTitlePriority(idParams, nameActivity, priorityValue);
    onTodoEdited();
    onClose();
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
          <div
            data-cy="modal-add-close-button"
            onClick={onClose}
            className="cursor-pointer"
          >
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
            onChange={(e) => setNameActivity(e.target.value)}
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
                    style={{ backgroundColor: color }}
                  ></div>
                  {thePriority}
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
                      className="flex items-center cursor-pointer"
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
            } btn text-white `}
            onClick={addTodoList}
          >
            SIMPAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
