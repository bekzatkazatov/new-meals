import React from "react";


const Footer = () =>{
    return(
        <div>
            <footer style={{background:"#c52c1c",marginTop:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-around",paddingTop:"20px",paddingBottom:"20px"}}>
                   <div>
                       <p>© 2023 TheMealDB</p>
                       <p>Proudly built in the UK </p>
                   </div>
                    <div style={{display:"flex"}}>
                        <h3>TheCocktailDB</h3>
                        <h3>TheAudioDB</h3>
                        <h3>TheSportsDB</h3>
                    </div>
                    <div>
                        <a href="#">About</a>
                        <a href="#">Faq</a>
                         <a href="#">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer