import { foodData } from './copmponents/FoodItem';
import './App.css'
import Navbar from './copmponents/Navbar';
import SearchResult from './copmponents/SearchResult';
import { useState } from 'react';
import { useEffect } from 'react';
// console.log(foodData);
function App() {

  const [fiteredData, setFilteredData] = useState(null);

  const [selectedBtn,setSelectedBtn]= useState("all");

  useEffect(() => {
    setFilteredData(foodData);
  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(null)
    }


    const filter = foodData.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);

  };

  const filterFood =(type) => {
    if(type == 'all'){
      setFilteredData(foodData);
      setSelectedBtn('all');
      return;
    }

    const filter = foodData.filter((food) => food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);

  }

  return (
    <>
      <Navbar search={searchFood} filterFood={filterFood}/>
      <SearchResult key={foodData.name} data={fiteredData} />
    </>
  )
}

export default App;
