import { Link } from "@reach/router";
import AddBeer from "./AddBeer";
import React from 'react';

function Beers (props) {
    const{data, addBeer} = props;

    return(
        <>
      
      
        <div class="list">
        
        <ol class="ol" >
        <h3> Beer List</h3>
            {
                data.map (beer => <li>
                
                   <Link to ={`/beer/${beer.id}`}>{beer.name}</Link>
                </li>)
            }
        </ol>
        <AddBeer addBeer = {addBeer}/>
        </div>
     
        </>
    );
        }
    export default Beers;