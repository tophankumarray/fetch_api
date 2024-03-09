import React, { useEffect, useState } from "react";
import "./fetchapi.css";

const FetchApi = () => {
  let [userdata, setUserdata] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let data = await window.fetch("http://localhost:5000/");
      let finalData = await data.json();
      setUserdata(finalData);
    };
    fetchData();
  }, []);
  return (
    <div>
      <table border={5}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Place</th>
        </tr>
        {userdata.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.sal}</td>
              <td>{val.place}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default FetchApi;
