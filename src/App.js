
import './App.css';
import {useState, useEffect} from 'react';
import { Router } from "@reach/router";
import Beer from "./Beer";
import Beers from "./Beers";


function App() {
 
  const [beers, setBeers] = useState([]);

  useEffect(()=> {
  const fetchData = async () => {
  const url = "https://api.punkapi.com/v2/beers";
  const response = await fetch(url);
  const data = await response.json();
  setBeers(data);
};
fetchData();
  }, []);

function getBeer(id){
  return beers.find(beer => beer.id === parseInt(id));

}

  return (
 <>
 <h1> Beer List</h1>
<Router>
  <Beers path="/" data = {beers}></Beers>
  <Beer path ="/beer/:id" getBeer={getBeer}></Beer>
</Router>
 </>
  
  );
}

export default App;
