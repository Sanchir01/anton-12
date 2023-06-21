import React from "react";
import { Box, Breadcrumbs, Link } from "@mui/material";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "../MuiBreadcrumbs/index.scss";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<ArrowForwardIosOutlinedIcon />}
      >
        <div className="breadcrumbs">
          <Link href="#" underline="hover">
            Отели
          </Link>
        </div>
        <div className="breadcrumbs">
          <Link href="#" underline="hover">
            Москва
          </Link>
        </div>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
