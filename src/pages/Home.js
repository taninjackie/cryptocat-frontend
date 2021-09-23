import React from "react"
import Banner from "../components/banner"
import BodyHome from "../components/bodyHome"
import MarketTrade from "../components/marketTrade"
//import MarketDataWidget from "../components/marketDataWidget"
import Footer from "../components/footer"
import './css/home.css'
const containerStyle = {
    display: "flex" , 
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    margin: "0 auto",
    maxWidth: "fit-content",
}

const DetailHome = () =>{
    const DetailHomeStyle = {
        margin : "-50px auto"
    }
    return(
        <h2 id="detailhome" style={DetailHomeStyle}>A Demo Crypto Currency Trading Platform</h2>
    )
}

const Home = () =>{
    return (
    <div style={containerStyle}>
        <Banner/>
        <BodyHome/>
        <MarketTrade/>
        <DetailHome/>
        <Footer/>
    </div>
    )
}

export default Home