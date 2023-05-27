import React, { useEffect, useState } from "react";
import { getOneActivity, getTodoList } from "../../utils/api";
import TodoHeader from "../../components/TodoHeader";
import TodoListCard from "../../components/TodoListCard";
import emptyMobile from "../../assets/todo-empty-mobile.svg";
import emptyDesktop from "../../assets/todo-empty-desktop.svg";
import Image from "next/image";
import TodoAddModal from "../../components/TodoAddModal";
import DeletedToast from "../../components/DeletedToast";
import { useRouter } from "next/router";

const Detail = ({ theData, theTitle, params }) => {
  const [data, setData] = useState(theData);
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [title, setTitle] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOneActivity(router.query.id);
        const title = response.title;
        setTitle(title);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // console.log("new", title);

  const getTodoItem = async () => {
    const response = await getTodoList(router.query.id);
    setData(response);
  };

  useEffect(() => {
    getTodoItem();
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (selectedSortOption === "latest") {
      return b.id - a.id;
    } else if (selectedSortOption === "oldest") {
      return a.id - b.id;
    } else if (selectedSortOption == "a-z") {
      return a.title.localeCompare(b.title);
    } else if (selectedSortOption == "z-a") {
      return b.title.localeCompare(a.title);
    } else if (selectedSortOption == "not-finished") {
      return b.is_active - a.is_active;
    }
    return 0;
  });

  const handleModal = () => {
    setOpenModal(true);
  };

  const theToast = () => {
    setToast(true);
  };

  useEffect(() => {
    if (toast) {
      const timeoutId = setTimeout(() => {
        setToast(false);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [toast]);

  return (
    <div>
      <TodoHeader
        theTitle={theTitle}
        theId={params}
        reFetch={getTodoItem}
        onOptionSelect={setSelectedSortOption}
        selectedOption={selectedSortOption}
      />
      {data <= 0 ? (
        <div data-cy="todo-empty-state">
          <Image
            alt="img"
            src={emptyMobile}
            className="block xmd:hidden mx-auto pt-[140px]"
            onClick={handleModal}
          />
          <div className="mx-auto block xmd:hidden text-base font-bold text-[#555555] pt-[35px] text-center">
            Buat List Item pertamamu
          </div>
          <Image
            alt="img"
            src={emptyDesktop}
            className="hidden xmd:block pt-[59px] mx-auto"
            onClick={handleModal}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 xmd:gap-[10px] pt-[28px] xmd:pt-12">
          {sortedData.map((item) => {
            return (
              <TodoListCard
                key={item.id}
                title={item.title}
                todoid={item.id}
                priority={item.priority}
                reFetch={getTodoItem}
                is_active={item.is_active}
                toastDelete={theToast}
              />
            );
          })}
        </div>
      )}
      {openModal && (
        <TodoAddModal
          idParams={params}
          onClose={() => setOpenModal(false)}
          onTodoAdded={getTodoItem}
        />
      )}
      {toast && <DeletedToast closeToast={() => setToast(false)} />}
    </div>
  );
};

export default Detail;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await getTodoList(id);
  const theData = res;

  const params = id;

  const title = await getOneActivity(id);
  const theTitle = title.title;
  // console.log(params);
  return { props: { theData, theTitle, params } };
}
