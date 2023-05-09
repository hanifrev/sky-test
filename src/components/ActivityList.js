import React, { useEffect, useState } from "react";
import emptyMobile from "../assets/empty-mobile.svg";
import emptyDesktop from "../assets/empty-desktop.svg";
import Image from "next/image";
import { createActivity, getAllActivity } from "../utils/api";
import ActivityHeader from "./ActivityHeader";
import CardActivity from "./CardActivity";

const ActivityList = () => {
  const [data, setData] = useState([]);

  const getActivity = async () => {
    const theData = await getAllActivity();
    setData(theData);
  };

  const postActivity = async () => {
    await createActivity("New Activity", "hanifrev@gmail.com");
    getActivity();
  };

  useEffect(() => {
    getActivity();
  }, []);

  console.log(data);

  return (
    <div>
      <ActivityHeader addActivity={postActivity} />
      {data <= 0 ? (
        <div data-cy="activity-empty-state">
          <Image
            src={emptyMobile}
            className="block xmd:hidden mx-auto pt-[140px]"
            onClick={() => alert("test")}
          />
          <div className="mx-auto block xmd:hidden text-base font-bold text-[#555555] pt-[35px] text-center">
            Buat activity pertamamu
          </div>
          <Image
            src={emptyDesktop}
            className="hidden xmd:block pt-[59px]"
            onClick={postActivity}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 justify-between sm:justify-start">
          {data.map((item) => {
            return <CardActivity data={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ActivityList;
