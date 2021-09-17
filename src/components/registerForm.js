import { TextField, Button, FormControl } from '@mui/material';
import { styled } from '@mui/system';
import "animate.css"
import "./css/LinkStyle.css"
const RegisterFormStyle = {
    display: "flex",
    flexDirection: "column",
    width: "800px",
    height: "800px",
    margin: "10px auto",
    maxWidth: "length",
    background: "white",
    color: "black",
    borderRadius: "45px",
    animationDuration: "0.5s",
}
const FormItemStyle = {
    display: "flex",
    flexDirection: "row",
    color: "black"
}
const UserFormItem = {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0px 0px 100px"

}
const GGFBLoginStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "80px 0px 0px 160px"
}
const ButtonStyle = {
    GGLoginBT: {
        height: "35px",
        background: "rgb(255,192,45,0.44)",
        color: "black"
    },
    FBLoginBT: {
        height: "35px",
        background: "rgb(64,196,255,0.44)",
        marginTop: "15px",
        color: "black"
    },
    CreateAccountBT: {
        height: "35px",
        width : "250px",
        background : "rgb(59,76,97)",
        marginTop : "30px",
        borderRadius : "8px"
    }
}
const TextFieldStyle = {
    shrink: false,
    style: {
        color: "rgb(255,255,255,0)",
    }
}


const FormTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'rgb(10,185,209)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(10,185,209)',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 5,
        width : "250px",
        
      '& fieldset': {
        borderColor: 'rgb(207,207,207)',
      },
      '&:hover fieldset': {
        borderColor: 'rgb(63,91,230)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(10,185,209)',
      },
    },
  });

const RegisterForm = () => {
    document.getElementsByTagName("title")[0].innerHTML = "Register"
    return (
        <div className="animate__animated animate__fadeInUp" style={RegisterFormStyle}>
            <h2 style={{ width: "250px", maxWidth: "fit-content", margin: "60px 200px 0 70px" }}>Create Demo Account</h2>
            <div style={FormItemStyle}>
                <div style={UserFormItem}>
                    <FormControl>
                        <h4>Email</h4>
                        <FormTextField color="warning" InputLabelProps={TextFieldStyle} required label="Email" size="small" className="textfield" type="email" />
                        <h4>First Name</h4>
                        <FormTextField InputLabelProps={TextFieldStyle} required label="First Name" size="small" type="text" />
                        <h4>Last Name</h4>
                        <FormTextField InputLabelProps={TextFieldStyle} required label="Last Name" size="small" type="text" />
                        <h4>Password</h4>
                        <FormTextField InputLabelProps={TextFieldStyle} required label="Password" size="small" type="password" />
                        <h4>Confirm Password</h4>
                        <FormTextField InputLabelProps={TextFieldStyle} required size="small" type="password" />
                        <Button style={ButtonStyle.CreateAccountBT} variant="contained">Create Account</Button>
                        <h5 style={{margin:"20px auto"}}>Account Already Exists. <a class="login_now" href="/register">Login Now</a></h5> 
                    </FormControl>
                </div>

                <div style={GGFBLoginStyle}>
                    <Button style={ButtonStyle.GGLoginBT} variant="contained" ><h4>Login With Google</h4></Button>
                    <Button style={ButtonStyle.FBLoginBT} variant="contained" ><h4>Login With Facebook</h4></Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
