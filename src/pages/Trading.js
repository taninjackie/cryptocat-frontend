//import { Container } from "react-bootstrap"
import Banner from "../components/banner"
import TradingView from "../components/tradingView"
const containerStyle = {
    display: "flex" , 
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    marginRight: "auto",
    maxWidth: "1000px",
}

const Trading = () =>{
    return(
        <div style={containerStyle}>
            <Banner/>
            <TradingView/>
        </div>
    )
}

export default Trading