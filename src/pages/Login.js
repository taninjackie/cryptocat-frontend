import Banner from "../components/banner"
import { LoginForm } from "../components/form"
import Footer from "../components/footer"

const containerStyle = {
    display: "flex" , 
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    margin: "0 auto",
    maxWidth: "fit-content",
}

const Login = () =>{
    return(
        <div style = {containerStyle}>
            <Banner/>
            <LoginForm/>
            <Footer/>
        </div> 
    )
}

export default Login