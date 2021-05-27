import { Link } from "@reach/router";
//import Beer from "./Beer";

function Beers (props) {
    const{data} = props;

    return(
        <>
        <h3> List</h3>
        <ol>
            {
                data.map (beer => <li>
                   <Link to ={'/beer/${beer.id}'}>{beer.name}</Link>
                </li>)
            }
        </ol>
        </>
    );
        }
    export default Beers;