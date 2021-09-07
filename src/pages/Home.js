import React from "react"
import {Container} from "react-bootstrap"
import Banner from "../components/banner"
import Body1 from "../components/body1"
import MarketTrade from "../components/marketTrade"
import Footer from "../components/footer"
const containerStyle = {
    display: "flex" , 
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    marginRight: "auto",
    maxWidth: "1000px",
}

const Home = () =>{
    return (
    <Container style={containerStyle}>
        <Banner/>
        <Body1/>
        <MarketTrade/>
        <Footer/>
    </Container>
    )
}

export default Home