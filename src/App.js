
import './App.css';
import {useState, useEffect} from 'react';
import { Router } from "@reach/router";
import Beer from "./Beer";
import Beers from "./Beers";
import AddBeer from "./AddBeer";



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


function addBeer(name, abv, description){
  const data ={
    name: name,
    abv: abv,
    description: description
  };

  
const postData = async () => {
 const url = "https://api.punkapi.com/v2/beers";
  const response = await fetch (url, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    
  });

  const reply = await response.json();
  console.log(reply)
};
  postData();


}

  return (
 <>
 <div class = "title">
 <h1> Beer List</h1>
 </div>
<Router>
  <Beers path="/" data = {beers} addBeer ={addBeer}></Beers>
  <Beer path ="/beer/:id" getBeer={getBeer}></Beer>
</Router>
 </>
  
  );
}

export default App;
