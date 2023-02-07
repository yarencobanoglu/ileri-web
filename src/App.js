import {useState,useEffect} from 'react';

import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  console.log("render");
  const [searchField,setSearchField] = useState('');
  const [makeups,setMakeups] = useState([]);
  const [filteredMakeups,setFilteredMakeups] = useState(makeups);

  useEffect(()=>{
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => response.json())
      .then((maybelline) => setMakeups(maybelline));
  },[])

  useEffect(()=>{
    const newFilteredMakeups = makeups.filter((makeup) => {
      return makeup.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMakeups(newFilteredMakeups)
  },[makeups,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    console.log("searchField: ",searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Professional make-up products</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search makeup'
        className='search-box' />
      <CardList makeups={filteredMakeups} />
    </div>
  );
}

export default App;

