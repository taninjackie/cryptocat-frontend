import { Container } from "react-bootstrap"

const ContainerStyle = {
    width: "100vw",
    height: "100px",
    bottom: "0",
    background : "rgba(146, 141, 209, 0.15)",
    position: "fixed",
    display: "flex",
    flexDirection: "row",

}

const Footer = () =>{
    return (
        <Container style={ContainerStyle}>  
            <h3 style={{paddingTop:"15px",marginLeft:"auto",marginRight:"auto",paddingLeft:"400px"}}>Contact US</h3>
            <h3 style={{paddingTop:"15px",marginLeft:"auto",marginRight:"auto",paddingLeft:"500px" , paddingRight:"350px"}}>About US</h3>
        </Container>
    )
    

}

export default Footer