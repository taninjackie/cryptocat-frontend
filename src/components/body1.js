import { Container } from "react-bootstrap"
import { Button } from "@material-ui/core"
const body1Style = {
    background: "rgba(152, 152, 152, 0.10)",
    width: "100vw",
    height: "160px",
    marginTop : "20px" , 
}
const boxStyle = {
    marginLeft : "100px" , 
    marginRight : "100px", 
}

const Body1 = () =>{
    return(
        <Container style={body1Style}>
            <Container style={boxStyle}>
               <h1>Buy & sell Crypto</h1>
                <Button style={{top:"10px"}} variant="contained" color="primary">
                    Demo Account
                </Button> 
            </Container>
            
            
        </Container>
    )
}
export default Body1

