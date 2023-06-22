import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import React from "react";

import "../MuiBreadcrumbs/index.scss";

const MuiBreadcrumbs = () => {
  return (
  <div className="main">
      <span className='otel'>Отели</span>
      <span> <ArrowForwardIosOutlinedIcon /></span>
      <span className='city'>Moscow</span>
    </div>
  );
};

export default MuiBreadcrumbs;
