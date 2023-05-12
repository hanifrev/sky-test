import Image from "next/image";
import React from "react";
import AZ from "../assets/sort/AZ.svg";
import ZA from "../assets/sort/ZA.svg";
import notFinish from "../assets/sort/belumSelesai.svg";
import latestLogo from "../assets/sort/terbaru.svg";
import oldest from "../assets/sort/terlama.svg";
import checked from "../assets/checked-mark.svg";

const SortDropdown = ({ selectedOption, onOptionSelect, onClose }) => {
  const handleOptionClick = (option) => {
    onOptionSelect(option);
    onClose();
  };

  return (
    <div id="sort-dropdown">
      <ul>
        <li
          onClick={() => handleOptionClick("latest")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image alt="img" src={latestLogo} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Terbaru
          </span>
          {selectedOption == "latest" && (
            <Image
              alt="img"
              className="checked"
              src={checked}
              data-cy="sort-selection-selected"
            />
          )}
        </li>
        <li
          onClick={() => handleOptionClick("oldest")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image alt="img" src={oldest} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Terlama
          </span>
          {selectedOption == "oldest" && (
            <Image
              alt="img"
              className="checked"
              src={checked}
              data-cy="sort-selection-selected"
            />
          )}
        </li>
        <li
          onClick={() => handleOptionClick("a-z")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image alt="img" src={AZ} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            A-Z
          </span>
          {selectedOption == "a-z" && (
            <Image
              alt="img"
              className="checked"
              src={checked}
              data-cy="sort-selection-selected"
            />
          )}
        </li>
        <li
          onClick={() => handleOptionClick("z-a")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image alt="img" src={ZA} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Z-A
          </span>
          {selectedOption == "z-a" && (
            <Image
              alt="img"
              className="checked"
              src={checked}
              data-cy="sort-selection-selected"
            />
          )}
        </li>
        <li
          onClick={() => handleOptionClick("not-finished")}
          className="flex items-center cursor-pointer"
          data-cy="sort-selection"
        >
          <span className="pr-3 xmd:pr-[15px]">
            <Image alt="img" src={notFinish} data-cy="sort-selection-icon" />
          </span>

          <span className="item-name" data-cy="sort-selection-title">
            Belum Selesai
          </span>
          {selectedOption == "not-finished" && (
            <Image
              alt="img"
              className="checked"
              src={checked}
              data-cy="sort-selection-selected"
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default SortDropdown;
