import { Container , Table} from "react-bootstrap"

const MarketTradeContainerStyle = {
    width: "100vw",
    height: "600px",
    display: "flex",
    flexDirection: "column",
    
}
const InsideContainerStyle = {
    width: "100%",
    marginRight: "auto",
    marginLeft: "200px",
    
}
const TableStyle = {
    maxWidth: "1248px",
    borderRadius:"20px",
    margin : "auto auto auto 250px",
    paddingLeft:"100px",
    display: 'flex', 
    flexDirection: 'row' , 
    textIndent: '250px',
    position: 'static',
    overflow: "auto",
}

const MarketTrade = () =>{
    return (
        <Container style={MarketTradeContainerStyle}>
            <Container style={InsideContainerStyle}>
                <h1>Market Trade</h1>
                <div style={TableStyle}>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{textIndent:"250px"}}>
                        <th><h2>Name</h2></th>
                        <th><h2>Last Price</h2></th>
                        <th><h2>24h Change</h2></th>
                        </tr>
                    </thead>
                    <br/>
                    <tbody>
                        
                        <tr style={{textIndent:"250px"}}>
                        <td><h3>Bitcoin</h3></td>
                        <td>50000$</td>
                        <td>2.5%</td>
                        </tr>
                        <tr style={{textIndent:"250px"}}>
                        <td><h3>Etherium</h3></td>
                        <td>5000$</td>
                        <td>-1.2%</td>
                        </tr>
                        <tr style={{textIndent:"250px"}}>
                        <td><h3>Litecoin</h3></td>
                        <td>500$</td>
                        <td>10.0%</td>
                        </tr>
                        <br/>
                        <tr style={{textIndent:"250px"}}>
                            <td></td>
                            <td>view more {'>'}</td>
                            <td></td>
                        </tr>
                    </tbody>
                    </Table>
                </div> 
            </Container>
        </Container>
    )
}

export default MarketTrade