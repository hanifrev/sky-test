import React from "react";
import { getOneActivity, getTodoList } from "../../utils/api";
import TodoHeader from "../../components/TodoHeader";

const Detail = ({ theData, theTitle }) => {
  console.log(theData);
  return (
    <div>
      <TodoHeader theTitle={theTitle} />
    </div>
  );
};

export default Detail;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await getTodoList(id);
  const theData = res;

  const title = await getOneActivity(id);
  const theTitle = title.title;
  return { props: { theData, theTitle } };
}
