import React, {useState} from "react";
import {Link} from "react-router-dom";
import meals from "./Meals";

const Header = () => {
    const [value,setValue] = useState('')

    //     return strmeal.name.toLowerCase().includes(value.toLowerCase())

    return (
        <header style={{display:"flex",justifyContent:"space-around",padding:'30px 10px',alignItems:"center",background:"#c52c1c",marginBottom:"10px"}}>

                <h2><Link style={{
                }} to='/'>LOGO
                </Link> </h2>
            <div>
                <input type="search" style={{background:"#e1ba1d",borderColor:"#c52c1c",borderRadius:"5px",paddingtop: "5px",
                  paddingBottom:"5px"}}/>

                <button style={{background:"#e1ba1d",borderColor:"#c52c1c",borderRadius:"5px",paddingtop: "5px",
                    paddingBottom:"5px",marginLeft:"3px"}}>Search</button>
            </div>


        </header>
    )
}
export default Header