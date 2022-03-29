import React from "react";
const Students = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>
          <li><b>Tên:</b> {props.name}</li>
          <li><b>MSSV:</b> {props.id}</li>
          <li><b>Lớp:</b>  {props.grade}</li>
      </ul>
      <hr></hr>
    </div>
  );
};
export default Students;