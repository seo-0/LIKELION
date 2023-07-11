import React from 'react';
import { Link } from "react-router-dom";

const Home =()=>{
return(

<div className='home'>
        <header style={{background: "skyblue"}}>
            <h1>MBTI 특징 공유</h1>
            <Link to="/admin">
                <button>관리자 페이지</button>
            </Link>
        </header>

</div>


    )


}
export default Home;

