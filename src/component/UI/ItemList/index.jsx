/* eslint-disable array-callback-return */
import React from "react";
import { useGetRecipesQuery } from '../../../store/api/api';
import "../ItemList/index.scss";
import Hotel from '../oneHotel/Hotel';

const ItemList = () => {

  const {data,isLoading ,isSuccess} = useGetRecipesQuery()

  return (
    <div className="itemlist">
      <div className="table">
        {
          isLoading ?
          'Loading': isSuccess ? data.map(item => <Hotel key={item.id} data={item}/>) : 'error'
        }
      </div>
    </div>
  );
};

export default ItemList;
