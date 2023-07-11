import {Link, Outlet} from "react-router-dom";

const Menu =()=>{
return(
    <div className="menu-bar">
        <header style={{background: "pink"}}>
            <ul>
                <Link to ="/">
                    <li>HOME</li>
                </Link>
                <Link to ="/project">
                    <li>Project</li>
                </Link>
                <Link to ="/login">
                    <li>Login</li>
                </Link>
            </ul>
        </header>
        <Outlet />
    </div>
);
};

export default Menu;