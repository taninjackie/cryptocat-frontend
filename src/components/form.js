import { TextField, Button, FormControl, FormHelperText } from "@mui/material";
import { styled } from "@mui/system";
import "animate.css";
import "./css/LinkStyle.css";
import "./css/TextStyle.css";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
//redux
import {
  setRegisterFormState,
  Validation,
  ClearState,
} from "../app/reducers/registerFormSlice";


const LoginFormStyle = {
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
  visibility: "visible",
};
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
  visibility: "visible",
};
const FormItemStyle = {
  display: "flex",
  flexDirection: "row",
  color: "black",
};
const UserFormItem = {
  display: "flex",
  flexDirection: "column",
  margin: "20px 0px 0px 100px",
};
const GGFBLoginStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "80px 0px 0px 160px",
};
const ButtonStyle = {
  GGLoginBT: {
    height: "35px",
    background: "rgb(255,192,45,0.44)",
    color: "black",
  },
  FBLoginBT: {
    height: "35px",
    background: "rgb(64,196,255,0.44)",
    marginTop: "15px",
    color: "black",
  },
  CreateAccountBT: {
    height: "35px",
    width: "250px",
    background: "rgb(59,76,97)",
    marginTop: "30px",
    borderRadius: "8px",
  },
  LoginBT: {
    height: "35px",
    width: "250px",
    background: "rgb(59,76,97)",
    marginTop: "30px",
    borderRadius: "8px",
  },
};
const TextFieldStyle = {
  shrink: false,
  style: {
    color: "rgb(255,255,255,0)",
  },
};
const FormTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(10,185,209)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(10,185,209)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 5,
    width: "250px",

    "& fieldset": {
      borderColor: "rgb(207,207,207)",
    },
    "&:hover fieldset": {
      borderColor: "rgb(63,91,230)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(10,185,209)",
    },
  },
});

const LoginForm = () => {
  document.getElementsByTagName("title")[0].innerHTML = "Login";
  let history = useHistory();
  const ToggleForm = () => {
    document.querySelector("#loginForm").className =
      "animate__animated animate__zoomOut";
    history.push("/register");
  };

  return (
    <div
      id="loginForm"
      className="animate__animated animate__fadeInUp"
      style={LoginFormStyle}
    >
      <h2
        style={{
          width: "250px",
          maxWidth: "fit-content",
          margin: "60px 200px 0 70px",
        }}
      >
        Account Login
      </h2>
      <div style={FormItemStyle}>
        <div style={UserFormItem}>
          <FormControl>
            <h4>Email</h4>
            <FormTextField
              color="warning"
              InputLabelProps={TextFieldStyle}
              required
              label="Email"
              size="small"
              className="textfield"
              type="email"
            />
            <h4>Password</h4>
            <FormTextField
              InputLabelProps={TextFieldStyle}
              required
              label="Password"
              size="small"
              type="password"
            />
            <Button style={ButtonStyle.LoginBT} variant="contained">
              Login
            </Button>
          </FormControl>
          <b id="fgpwText">Forgot Password?</b>
          <b
            id="regText"
            onClick={() => {
              ToggleForm();
            }}
          >
            Register
          </b>
        </div>

        <div style={GGFBLoginStyle}>
          <Button style={ButtonStyle.GGLoginBT} variant="contained">
            <h4>Login With Google</h4>
          </Button>
          <Button style={ButtonStyle.FBLoginBT} variant="contained">
            <h4>Login With Facebook</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  document.getElementsByTagName("title")[0].innerHTML = "Register";

  const history = useHistory();
  const dispatch = useDispatch();

  //get register form state in register form store
  var regisFormObject = useSelector((state) => state.registerForm);

  /*JSON.parse(
    useSelector((state) => JSON.stringify(state.registerForm))
  );*/
  //const objectTest= useSelector(state => state.registerForm)
  const ToggleForm = () => {
    document.querySelector("#regisForm").className =
      "animate__animated animate__zoomOut";
    dispatch(ClearState());
    history.push("/login");
  };

  //Register Submit
  const Submit = (e) => {
    e.preventDefault();
    if (
      regisFormObject.isEmail === true &&
      regisFormObject.isFirstName === true &&
      regisFormObject.isLastName === true &&
      regisFormObject.isPassword === true &&
      regisFormObject.isConfirmPassword === true
    ) {
      axios
        .post("/api/register", regisFormObject.userForm)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div
      id="regisForm"
      className="animate__animated animate__fadeInUp"
      style={RegisterFormStyle}
    >
      <h2
        style={{
          width: "250px",
          maxWidth: "fit-content",
          margin: "60px 200px 0 70px",
        }}
      >
        Create Demo Account
      </h2>
      <div style={FormItemStyle}>
        <div style={UserFormItem}>
          <form
            onSubmit={(e) => {
              Submit(e);
            }}
          >
            <FormControl>
              <h4>Email</h4>
              <FormTextField
                color="warning"
                InputLabelProps={TextFieldStyle}
                required
                label="Email"
                size="small"
                className="textfield"
                type="email"
                onChange={(e) => {
                  dispatch(setRegisterFormState(["email", e.target.value]));
                }}
                onBlur={() => {
                  dispatch(Validation("email"));
                }}
              />
              <FormHelperText
                style={{
                  height: "0px",
                  color: regisFormObject.helperText.emailMsg.color,
                }}
                children={regisFormObject.helperText.emailMsg.massage}
                id="emailHelperText"
              />

              <h4>First Name</h4>
              <FormTextField
                InputLabelProps={TextFieldStyle}
                required
                label="First Name"
                size="small"
                type="text"
                onChange={(e) =>
                  dispatch(setRegisterFormState(["fname", e.target.value]))
                }
                onBlur={() => {
                  dispatch(Validation("fname"));
                }}
              />
              <FormHelperText
                style={{
                  height: "0px",
                  color: regisFormObject.helperText.fnameMsg.color,
                }}
                children={regisFormObject.helperText.fnameMsg.massage}
                id="fnameHelperText"
              />
              <h4>Last Name</h4>
              <FormTextField
                InputLabelProps={TextFieldStyle}
                required
                label="Last Name"
                size="small"
                type="text"
                onChange={(e) =>
                  dispatch(setRegisterFormState(["lname", e.target.value]))
                }
                onBlur={() => {
                  dispatch(Validation("lname"));
                }}
              />
              <FormHelperText
                style={{
                  height: "0px",
                  color: regisFormObject.helperText.lnameMsg.color,
                }}
                children={regisFormObject.helperText.lnameMsg.massage}
                id="lnameHelperText"
              />
              <h4>Password</h4>
              <FormTextField
                InputLabelProps={TextFieldStyle}
                required
                label="Password"
                size="small"
                type="password"
                onChange={(e) =>
                  dispatch(setRegisterFormState(["password", e.target.value]))
                }
                onBlur={() => {
                  dispatch(Validation("password"));
                }}
              />
              <FormHelperText
                style={{
                  height: "0px",
                  color: regisFormObject.helperText.passwordMsg.color,
                }}
                children={regisFormObject.helperText.passwordMsg.massage}
                id="passwordHelperText"
              />
              <h4>Confirm Password</h4>
              <FormTextField
                InputLabelProps={TextFieldStyle}
                required
                size="small"
                type="password"
                onChange={(e) =>
                  dispatch(
                    setRegisterFormState(["confirmPassword", e.target.value])
                  )
                }
                onBlur={() => {
                  dispatch(Validation("confirmPassword"));
                }}
              />
              <FormHelperText
                style={{
                  height: "0px",
                  color: regisFormObject.helperText.confirmPasswordMsg.color,
                }}
                children={regisFormObject.helperText.confirmPasswordMsg.massage}
                id="confirmPasswordHelperText"
              />
              <Button
                type="submit"
                style={ButtonStyle.CreateAccountBT}
                variant="contained"
              >
                Create Account
              </Button>
              <h5 style={{ margin: "20px auto" }}>
                Account Already Exists.{" "}
                <b onClick={() => ToggleForm()} className="login_now">
                  Login Now
                </b>
              </h5>
            </FormControl>
          </form>
        </div>

        <div style={GGFBLoginStyle}>
          <Button
            onClick={() => console.log(regisFormObject.userForm)}
            style={ButtonStyle.GGLoginBT}
            variant="contained"
          >
            <h4>Login With Google</h4>
          </Button>
          <Button style={ButtonStyle.FBLoginBT} variant="contained">
            <h4>Login With Facebook</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { LoginForm, RegisterForm };
