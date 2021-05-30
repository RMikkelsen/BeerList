import { useState } from "react";

function AddBeer (props){
const {addBeer} = props;

const [name, setName] = useState("");
const [abv, setAbv] = useState("");
const [description, setDescription] = useState("");

return(

    <>
    <div class="addbeer">
   <h3>Add a Beer</h3>

   <input class="form" onChange ={(event) => setName(event.target.value)} type ="text" placeholder="Beer Name" /> <br/><br/>
   <input class="form" onChange ={(event) => setAbv(event.target.value)} type ="text" placeholder = "abv"/><br/><br/>
   <input class="form" onChange ={(event) => setDescription(event.target.value)} type ="text" placeholder = "Description" /><br/><br/>


<button type="button" onClick ={(event) =>{
  addBeer(name, abv, description);
}}>Add Beer</button>
</div>
    </>
);

}

export default AddBeer;