import React from "react";

import CardMain from "../../component/UI/CardMain";
import FormMain from "../../component/UI/FormMain";
import ItemList from "../UI/ItemList";
import Options from "../UI/Options";

const Favorite = () => {
  return (
    <>
      <div className="favorite__menu">
        <CardMain>
          <FormMain title={"Избранное"}>
            <Options />
            <ItemList></ItemList>
          </FormMain>
        </CardMain>
      </div>
    </>
  );
};

export default Favorite;
