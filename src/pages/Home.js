import React from "react"
import {Container ,Figure ,Row , Col } from "react-bootstrap"

const Home = () =>{
    return (
    <Container style={{marginLeft : "400px" , marginTop : "70px" , display: "flex" , flexDirection: "row"}}>
        <Col>
            <Figure.Image
                width={150}
                height={150}
                alt="100x100"
                src="Crypto Cat Icon.jpg"
                style={{
                    borderRadius: "102px",
                    backgroundBlendMode: "luminosity"
                }}
            />  
        </Col>
        <Col><h1 style={{marginLeft : "50px" , fontSize : "60px"}}>Crypto Cat</h1></Col>
    </Container>
    )
}

export default Home