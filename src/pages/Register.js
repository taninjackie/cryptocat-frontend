import Banner from "../components/banner"
import { RegisterForm } from "../components/form"
import Footer from "../components/footer"

const containerStyle = {
    display: "flex" , 
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    margin: "0 auto",
    maxWidth: "fit-content",
}

const Register = () =>{
    return(
        <div style = {containerStyle}>
            <Banner/>
            <RegisterForm/>
            <Footer/>
        </div> 
    )
}

export default Register