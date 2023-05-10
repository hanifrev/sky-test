import React from "react";
import pencil from "../assets/pencil.svg";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";

const TodoListCard = () => {
  const circleStyle = {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    backgroundColor: "#FF0000",
  };

  return (
    <div
      data-cy="todo-item"
      id="todoListCard"
      className="flex flex-row justify-between items-center px-5 xmd:pl-7 xmd:pr-6"
    >
      <div className="flex flex-row items-center">
        <div className="flex items-center">
          <input
            type="checkbox"
            // checked={todo.completed}
            // onChange={() => handleCheckbox(todo.id)}
            className="check"
            data-cy="todo-item-checkbox"
          />
        </div>
        <div
          className="mx-[14px] flex items-center"
          data-cy="todo-item-priority-indicator"
          style={circleStyle}
        ></div>
        <div
          className="font-medium text-sm xmd:text-lg pr-2 xmd:pr-4"
          data-cy="todo-item-title"
        >
          todo
        </div>
        <div data-cy="todo-item-edit-button" className="flex items-center">
          <Image src={pencil} className="w-4 xmd:w-[24px] " />
        </div>
      </div>
      <div
        data-cy="todo-item-delete-button"
        className="cursor-pointer -mr-3 xmd:mr-0"
        // onClick={handleModal}
      >
        <HiOutlineTrash className="text-[#888888] w-9 xmd:w-6 xmd:h-6 -mt-[1px] xmd:-mt-[3px]" />
      </div>
    </div>
  );
};

export default TodoListCard;
