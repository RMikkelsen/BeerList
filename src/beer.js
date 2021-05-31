import { Link } from "@reach/router";

function Beer(props){
    const {id, getBeer} = props;
    const beer = getBeer(id);

    if (beer === undefined) {
        return <p>What no beer? I'm thirsty :(</p>;
    }else return (
        <>
        <div class="beer">

       
        <h3>Beer: {beer.name}</h3>
        <p>ABV: {beer.abv}</p>
        <p>{beer.description}</p>
       <img src ={beer.image_url} alt="craft beer"></img>
      
<div class = "homelink">
      
                   <Link to="/">Back to the List</Link>
                   </div>
       </div>
</>
        
    );
}
export default Beer;