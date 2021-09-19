const ContainerStyle = {
    width: "100%",
    height: "50px",
    bottom: "0",
    background : "rgba(146, 141, 209, 0.15)",
    position : "fixed",
    display: "flex",
    flexDirection: "row",
    cursor : "pointer"
}

const Footer = () =>{
    return (
        <div id="footer" style={ContainerStyle}>  
            <h4 style={{whiteSpace:"nowrap",margin:"12px auto auto auto",paddingLeft:"400px"}}>Contact US</h4>
            <h4 style={{whiteSpace:"nowrap",margin:"12px auto auto auto",paddingRight:"400px"}}>About US</h4>
        </div>
    )
}

export default Footer