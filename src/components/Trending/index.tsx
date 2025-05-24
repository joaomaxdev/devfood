import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CardHorizontalFood from './food';

export function Trending() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    async function getFoods(){
      const respose = await fetch("http://localhost:3000")
    }

    getFoods();
  },[])
 return (
   <FlatList 
      data={foods}
      renderItem={ ({item}) => <CardHorizontalFood /> }
   />
  );
}