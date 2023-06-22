/* eslint-disable array-callback-return */
import React from "react";



import { useGetAllQuery } from '../../../store/api/favorites.api';
import "../ItemList/index.scss";

const ItemList = () => {

  const {data} = useGetAllQuery()
  console.log(data)


  // const items = Hotel(state =>state.fetchOtels)
  // const hotels = Hotel(state =>state.Hotels)
  
  // useEffect(() => {
  //   const fetchHotel = async() =>{
  //     try{
  //       const {data} = await axios.get("https://648e0a572de8d0ea11e8857d.mockapi.io/hostel")
  //       items(data)
  //     } catch (error){
  //       alert("э ошибка")
  //     }
  //   }
  //   fetchHotel()
  // }, []);

  return (
    <div className="itemlist">
      <div className="table">
         {data.map(item =>( 
         <div className="stroke" key={item.name}>
            <span>{item.name}</span>
            <span>{item.data}</span>
            <div>{item.rating}</div>
            <div className='price'>
              <span>Цена</span>
              <span>{item.price}</span>
              </div>
          </div>)
         
         )}
       
      </div>
    </div>
  );
};

export default ItemList;
