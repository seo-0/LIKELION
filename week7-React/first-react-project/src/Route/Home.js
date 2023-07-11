import { Link, useNavigate} from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();


return(
    <div>
        <h1>Home</h1>
        <Link to ="/result">
            <button>Result</button>
        </Link>
        <Link to ="/admin">
            <button>Admin</button>
        </Link>
        <button onClick={()=> navigate("/navigate")}> Navigate </button>
    </div>
);
};

export default Home;