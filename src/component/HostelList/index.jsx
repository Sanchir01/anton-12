import React from "react";

import CardMain from "../../component/UI/CardMain";
import Slider from "../UI/Slider";
import ItemList from "../../component/UI/ItemList";
import Breadcrumbs from "../UI/Breadcrumbs";

import "../HostelList/index.scss";

const HostelList = () => {
  return (
    <>
      <div className="hostellist__box">
        <CardMain>
          <div className="hostellist__box-inner">
            <Breadcrumbs />
            <Slider />
            <ItemList />
          </div>
        </CardMain>
      </div>
    </>
  );
};

export default HostelList;
