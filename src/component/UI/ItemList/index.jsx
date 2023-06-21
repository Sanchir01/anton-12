import React, { useEffect, useState } from "react";
import axios from "axios";

import "../ItemList/index.scss";

const ItemList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://648e0a572de8d0ea11e8857d.mockapi.io/hostel")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="itemlist">
      <div className="table">
        <table>
          {data.map((hostel, index) => {
            return (
              <tr key={index}>
                <td>{hostel.name}</td>
                <td>{hostel.price}</td>
                <td>{hostel.date}</td>
                <td>{hostel.rating}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ItemList;
