import React from "react";
import { getOneActivity, getTodoList } from "../../utils/api";
import TodoHeader from "../../components/TodoHeader";

const Detail = ({ theData, theTitle, params }) => {
  // console.log(params);
  return (
    <div>
      <TodoHeader theTitle={theTitle} theId={params} />
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
