import React, { useEffect, useState } from "react";
import emptyMobile from "../assets/empty-mobile.svg";
import emptyDesktop from "../assets/empty-desktop.svg";
import Image from "next/image";
import { createActivity, getAllActivity, removeActivity } from "../utils/api";
import ActivityHeader from "./ActivityHeader";
import CardActivity from "./CardActivity";
import DeletedToast from "./DeletedToast";

const ActivityList = () => {
  const [data, setData] = useState([]);
  const [toast, setToast] = useState(false);

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

  const onDeleteActivity = async (id) => {
    await removeActivity(id);
    getActivity();
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
      <ActivityHeader addActivity={postActivity} />
      {data <= 0 ? (
        <div data-cy="activity-empty-state">
          <Image
            alt="img"
            src={emptyMobile}
            className="block xmd:hidden mx-auto pt-[140px]"
            onClick={postActivity}
          />
          <div className="mx-auto block xmd:hidden text-base font-bold text-[#555555] pt-[35px] text-center">
            Buat activity pertamamu
          </div>
          <Image
            alt="img"
            src={emptyDesktop}
            className="hidden xmd:block mx-auto pt-[59px]"
            onClick={postActivity}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-5 justify-between sm:justify-start mt-9 xmd:mt-12">
          {data.map((item) => {
            return (
              <CardActivity
                key={item.id}
                data={item}
                onDelete={onDeleteActivity}
                toastDelete={theToast}
              />
            );
          })}
        </div>
      )}
      {toast && <DeletedToast closeToast={() => setToast(false)} />}
    </div>
  );
};

export default ActivityList;
