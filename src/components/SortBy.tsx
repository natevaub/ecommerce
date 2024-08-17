import React, { useState } from "react";

interface FlyoutLinksProps {
  FlyoutContent: React.FC<{ onSortChange: (sortBy: string) => void }>;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

interface SortByProps {
  onSortChange: (sortBy: string) => void;
}

const SortByChoices = [
  "Price Low To High",
  "Price High To Low",
  "Alphabetical A - Z",
  "Alphabetical Z - A",
];

export const FlyoutLink: React.FC<FlyoutLinksProps> = ({ FlyoutContent, sortBy, onSortChange }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit xl:ml-12 sm:ml-10"
    >
      <h1 className="uppercase font-bold pb-2 text-sm cursor-pointer">
        Sort By :{" "}
        <span className="text-red-400 transition duration-150">
          {sortBy || "Please select one"}
        </span>
      </h1>
      {showFlyout && <FlyoutContent onSortChange={onSortChange} />}
    </div>
  );
};

// const SortBy: React.FC<SortByProps> = ({ onSortChange }) => {
//   const liStyle = "p-1 hover:bg-gray-200 hover:font-semibold";
//   return (
//     <ul className="border-2 cursor-pointer">
//       <li
//         className={liStyle}
//         onClick={() => {
//           onSortChange("Price Low To High");
//         }}
//       >
//         Price Low to High
//       </li>
//       <li
//         className={liStyle}
//         onClick={() => {
//           onSortChange("Price High To Low");
//         }}
//       >
//         Price High to Low
//       </li>
//       <li
//         className={liStyle}
//         onClick={() => {
//           onSortChange("Alphabetical A - Z");
//         }}
//       >
//         Alphabetical A - Z
//       </li>
//       <li
//         className={liStyle}
//         onClick={() => {
//           onSortChange("Alphabetical Z - A");
//         }}
//       >
//         Alphabetical Z - A
//       </li>
//     </ul>
//   );
// };

export const SortBy:React.FC<SortByProps> = ({ onSortChange }) => {
  const listStyle = "p-1 hover:bg-gray-200 hover:font-semibold";

  return (
    <ul className="border-2 cursor-pointer">
      {SortByChoices.map((choice, index) => (
        <li
          key={index}
          className={listStyle}
          onClick={() => onSortChange(choice)}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}