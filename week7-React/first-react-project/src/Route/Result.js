import { Link } from "react-router-dom";

const Result =()=>{
return(
    <div>
        <h1>Result</h1>
        <Link to= "/admin">
            <button>Admin</button>
        </Link>
    </div>
    )
}

export default Result;