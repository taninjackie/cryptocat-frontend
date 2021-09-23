import { Box } from "@mui/material";
import { useHistory } from "react-router";

const bannerStyle = {
  width: "100vw",
  height: "25%",
  justifyContent: "left",
  alignItems: "left",
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "70px",
  display: "flex",
  flexDirection: "row",
};

const Banner = () => {
  const history = useHistory();
  const goToHome = () =>{
    history.push("/")
  }
  return (
    <div style={bannerStyle}>
      <Box>
        <img
          width={150}
          height={150}
          alt="100x100"
          src="Crypto Cat Icon.jpg"
          style={{
            borderRadius: "102px",
            filter: "grayscale()",
          }}
        />
      </Box>
      <Box>
        <h1 onClick={()=>goToHome()} style={{ marginLeft: "50px", fontSize: "60px" ,cursor:"pointer"}}>Crypto Cat</h1>
      </Box>
    </div>
  );
};

export default Banner;
