import { Fragment } from "react";
import { Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableHeader = () => {
  function header() {
    const tableHeader = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return tableHeader.map((day) => <Th>{day}</Th>);
  }

  return <Fragment>{header()}</Fragment>;
};

export default TableHeader;
