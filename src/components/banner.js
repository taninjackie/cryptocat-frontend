import { Col , Container , Figure } from "react-bootstrap"

const bannerStyle = {
    width : "100vw",
    height:"25%",
    justifyContent: 'left',
    alignItems: 'left', 
    marginLeft : "100px" , 
    marginRight : "100px", 
    marginTop : "70px" , 
    display: "flex" , 
    flexDirection: "row"
}

const Banner = () =>{
    return(
        <Container style={bannerStyle}>
            <Col>
                <Figure.Image
                    width={150}
                    height={150}
                    alt="100x100"
                    src="Crypto Cat Icon.jpg"
                    style={{
                        borderRadius: "102px",
                        filter: "grayscale()"
                    }}
                />  
            </Col>
            <Col><h1 style={{marginLeft : "50px" , fontSize : "60px"}}>Crypto Cat</h1></Col>
        </Container>
    )
}

export default Banner