import React, { useEffect, useState } from "react";
import { getOneActivity, getTodoList } from "../../utils/api";
import TodoHeader from "../../components/TodoHeader";
import TodoListCard from "../../components/TodoListCard";
import emptyMobile from "../../assets/todo-empty-mobile.svg";
import emptyDesktop from "../../assets/todo-empty-desktop.svg";
import Image from "next/image";

const Detail = ({ theData, theTitle, params }) => {
  const [data, setData] = useState(theData);
  const [openAddModal, setOpenAddModal] = useState();

  const getTodoItem = async () => {
    const response = await getTodoList(params);
    setData(response);
  };

  // useEffect(() => {
  //   const reFetchData = async () => {
  //     await getTodoItem();
  //   };
  //   reFetchData();
  // }, []);
  useEffect(() => {
    getTodoItem();
  }, []);

  console.log(data);

  return (
    <div>
      <TodoHeader theTitle={theTitle} theId={params} reFetch={getTodoItem} />
      {data <= 0 ? (
        <div data-cy="todo-empty-state">
          <Image
            src={emptyMobile}
            className="block xmd:hidden mx-auto pt-[140px]"
            // onClick={postActivity}
          />
          <div className="mx-auto block xmd:hidden text-base font-bold text-[#555555] pt-[35px] text-center">
            Buat List Item pertamamu
          </div>
          <Image
            src={emptyDesktop}
            className="hidden xmd:block pt-[59px] mx-auto"
            // onClick={postActivity}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-2 xmd:gap-[10px] pt-[28px] xmd:pt-12">
          {data.map((item) => {
            return (
              <TodoListCard
                title={item.title}
                todoid={item.id}
                reFetch={getTodoItem}
              />
            );
          })}
        </div>
      )}
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
  return { props: { theData, theTitle, params } };
}
