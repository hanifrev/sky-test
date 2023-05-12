import Image from "next/image";
import React from "react";
import AZ from "../assets/sort/AZ.svg";
import ZA from "../assets/sort/ZA.svg";
import notFinish from "../assets/sort/belumSelesai.svg";
import latestLogo from "../assets/sort/terbaru.svg";
import oldest from "../assets/sort/terlama.svg";

const SortDropdown = ({ selectedOption, onOptionSelect }) => {
  const handleOptionClick = (option) => {
    onOptionSelect(option);
  };

  //   console.log(selectedOption);

  return (
    <div id="sort-dropdown">
      <ul>
        <li
          onClick={() => handleOptionClick("latest")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection-latest"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image src={latestLogo} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Terbaru
          </span>
        </li>
        <li
          onClick={() => handleOptionClick("oldest")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection-oldest"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image src={oldest} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Terlama
          </span>
        </li>
        <li
          onClick={() => handleOptionClick("a-z")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection-az"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image src={AZ} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            A-Z
          </span>
        </li>
        <li
          onClick={() => handleOptionClick("z-a")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection-za"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image src={ZA} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Z-A
          </span>
        </li>
        <li
          onClick={() => handleOptionClick("not-finished")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection-not-finished"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image src={notFinish} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Belum Selesai
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SortDropdown;
