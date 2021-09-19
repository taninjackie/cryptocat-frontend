import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
const bodyHomeStyle = {
    background: "rgba(152, 152, 152, 0.10)",
    width: "100vw",
    height: "160px",
    marginTop : "20px" , 
}
const boxStyle = {
    marginLeft : "100px" , 
    marginRight : "100px", 
}

const ButtonChange = (e) =>{
    if(e._reactName === "onMouseEnter"){
        e.target.style.background = "white"
        e.target.style.color = "black"
    }
    else if(e._reactName === "onMouseOut"){
        e.target.style.background = "#66687E"
        e.target.style.color = "white"
    }
}

const BodyHome = () =>{
    return(
        <div style={bodyHomeStyle}>
            <div style={boxStyle}>
               <h1>Buy & sell Crypto</h1>
               <Link style={{textDecoration:"none"}} to="/register">
                <Button onMouseEnter={ButtonChange} onMouseOut={ButtonChange} style={{top:"10px" , background:"#66687E"}} variant="contained">
                    Demo Account
                </Button> 
                </Link>
                <Link style={{textDecoration:"none" , marginLeft:"20px"}} to="/login">
                <Button onMouseEnter={ButtonChange} onMouseOut={ButtonChange} style={{top:"10px" , background:"#66687E"}} variant="contained">
                    Login
                </Button> 
                </Link>
            </div> 
        </div>
    )
}
export default BodyHome

