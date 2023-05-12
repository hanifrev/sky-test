import React, { useEffect, useState } from "react";
import pencil from "../assets/pencil.svg";
import Image from "next/image";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteTodo, updateTodoChecked } from "../utils/api";
import ModalTodo from "./ModalTodo";
import TodoAddModal from "./TodoAddModal";
import TodoEditModal from "./TodoEditModal";

const TodoListCard = ({ title, todoid, priority, reFetch, is_active }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [priorityColor, setPriorityColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = async () => {
    const updatedValue = isChecked ? 0 : 1;
    await updateTodoChecked(todoid, updatedValue);
    reFetch();
    setIsChecked((prevState) => !prevState);
  };

  useEffect(() => {
    if (is_active !== undefined) {
      setIsChecked(is_active === 0 ? true : false);
    }
  }, [is_active]);

  const openDeleteModal = () => {
    setOpenModal(true);
  };

  const handleDelete = async () => {
    await deleteTodo(todoid);
    setOpenModal(false);
    reFetch();
  };

  useEffect(() => {
    if (priority == "very-high") {
      setPriorityColor("#ED4C5C");
    } else if (priority == "high") {
      setPriorityColor("#F8A541");
    } else if (priority == "normal") {
      setPriorityColor("#00A790");
    } else if (priority == "low") {
      setPriorityColor("#428BC1");
    } else {
      setPriorityColor("#8942C1");
    }
  }, [reFetch, priority]);

  const handleEdit = () => {
    setModalEdit(true);
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
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="check"
            data-cy="todo-item-checkbox"
          />
        </div>
        <div
          className={`mx-[14px] flex items-center w-[9px] h-[9px] rounded-[50%] `}
          data-cy="todo-item-priority-indicator"
          style={{ backgroundColor: priorityColor }}
        ></div>
        <div
          className={`font-medium text-sm xmd:text-lg pr-2 xmd:pr-4 ${
            isChecked ? "text-[#888888]" : "text-black"
          }`}
          data-cy="todo-item-title"
          style={{ textDecoration: isChecked ? "line-through" : "none" }}
        >
          {title}
        </div>
        <div
          data-cy="todo-item-edit-button"
          className="flex items-center cursor-pointer"
          onClick={handleEdit}
        >
          <Image alt="img" src={pencil} className="w-4 xmd:w-[24px] " />
        </div>
      </div>
      <div
        data-cy="todo-item-delete-button"
        className="cursor-pointer -mr-3 xmd:mr-0"
        onClick={openDeleteModal}
      >
        <HiOutlineTrash className="text-[#888888] w-9 xmd:w-6 xmd:h-6 -mt-[1px] xmd:-mt-[3px]" />
      </div>
      {openModal && (
        <ModalTodo
          data={title}
          onClose={() => setOpenModal(false)}
          onDeleteActivity={handleDelete}
        />
      )}
      {modalEdit && (
        <TodoEditModal
          onClose={() => setModalEdit(false)}
          titleEdit={title}
          priorityEdit={priority}
          idParams={todoid}
          onTodoEdited={reFetch}
        />
      )}
    </div>
  );
};

export default TodoListCard;
