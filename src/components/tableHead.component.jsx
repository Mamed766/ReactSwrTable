import React from "react";

const TableHeader = () => {
  return (
    <thead className="bg-gray-700 text-white">
      <tr className="">
        <th>Name</th>
        <th>Function</th>
        <th>Review</th>
        <th>Email</th>
        <th>Employed</th>
        <th>Id</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
