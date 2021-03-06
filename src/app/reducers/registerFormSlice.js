import { createSlice } from "@reduxjs/toolkit";
import validator from "validator";
import isValidUTF8 from "utf-8-validate";
import { typeCheck } from "type-check";
import axios from "axios";

const initialState = {
  userForm: {
    email: String(),
    firstName: String(),
    lastName: String(),
    password: String(),
    confirmPassword: String(),
  },
  isEmail: Boolean(),
  isFirstName: Boolean(),
  isLastName: Boolean(),
  isPassword: Boolean(),
  isConfirmPassword: Boolean(),
  helperText: {
    emailMsg: { massage: "", color: "" },
    fnameMsg: { massage: "", color: "" },
    lnameMsg: { massage: "", color: "" },
    passwordMsg: { massage: "", color: "" },
    confirmPasswordMsg: { massage: "", color: "" },
  },
};

const registerForm = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    setRegisterFormState: (state = initialState, action) => {
      switch (action.payload[0]) {
        case "email": {
          state.userForm = { ...state.userForm, email: action.payload[1] };
          break;
        }
        case "fname": {
          state.userForm = { ...state.userForm, firstName: action.payload[1] };
          break;
        }
        case "lname": {
          state.userForm = { ...state.userForm, lastName: action.payload[1] };
          break;
        }
        case "password": {
          state.userForm = { ...state.userForm, password: action.payload[1] };
          break;
        }
        case "confirmPassword": {
          state.userForm = {
            ...state.userForm,
            confirmPassword: action.payload[1],
          };
          break;
        }
        default:
          break;
      }
      //state.userForm = {...state.userForm , email : action.payload }
      //console.log(state.userForm)
      //console.log(state.userForm);
    },
    Validation: (state = initialState, action) => {
      //console.log(action.payload)
      var massage,
        color = "";
      switch (action.payload) {
        case "email": {
          if (state.userForm.email !== "")
            if (typeCheck("String", state.userForm.email)) {
              if (validator.isEmail(state.userForm.email)) {
                state.isEmail = true;
                massage = "valid";
                color = "green";
              } else {
                state.isEmail = false;
                massage = "invalid";
                color = "red";
              }
            } else {
              state.isEmail = false;
              massage = "invalid";
              color = "red";
            }

          state.helperText.emailMsg = {
            ...state.helperText.emailMsg,
            massage: massage,
            color: color,
          };
          break;
        }
        case "fname": {
          if (state.userForm.firstName !== "")
            if (state.userForm.firstName.length < 50)
              if (typeCheck("String", state.userForm.firstName))
                if (isValidUTF8(state.userForm.firstName)) {
                  state.isFirstName = true;
                  massage = "valid";
                  color = "green";
                } else {
                  state.isFirstName = false;
                  massage = "invalid";
                  color = "red";
                }
              else {
                state.isFirstName = false;
                massage = "invalid";
                color = "red";
              }
            else {
              state.isFirstName = false;
              massage = "invalid";
              color = "red";
            }
          state.helperText.fnameMsg = {
            ...state.helperText.fnameMsg,
            massage: massage,
            color: color,
          };
          break;
        }
        case "lname": {
          if (state.userForm.lastName !== "")
            if (state.userForm.lastName.length < 50)
              if (typeCheck("String", state.userForm.lastName))
                if (isValidUTF8(state.userForm.lastName)) {
                  state.isLastName = true;
                  massage = "valid";
                  color = "green";
                } else {
                  state.isLastName = false;
                  massage = "invalid";
                  color = "red";
                }
              else {
                state.isLastName = false;
                massage = "invalid";
                color = "red";
              }
            else {
              state.isLastName = false;
              massage = "invalid";
              color = "red";
            }
          state.helperText.lnameMsg = {
            ...state.helperText.lnameMsg,
            massage: massage,
            color: color,
          };
          break;
        }
        case "password": {
          if (state.userForm.password.length >= 8) {
            if (typeCheck("String", state.userForm.password)) {
              state.isPassword = true;
              massage = "valid";
              color = "green";
            } else {
              state.isPassword = false;
              massage = "invalid";
              color = "red";
            }
          } else if (
            state.userForm.password.length > 0 &&
            state.userForm.password.length < 8
          ) {
            state.isPassword = false;
            massage = "should be at least 8 characters";
            color = "red";
          }
          state.helperText.passwordMsg = {
            ...state.helperText.passwordMsg,
            massage: massage,
            color: color,
          };
          break;
        }
        case "confirmPassword": {
          if (
            state.userForm.confirmPassword !== "" &&
            state.userForm.confirmPassword === state.userForm.password &&
            state.userForm.confirmPassword.length >= 8
          )
            if (typeCheck("String", state.userForm.confirmPassword)) {
              state.isConfirmPassword = true;
              massage = "valid";
              color = "green";
            } else {
              state.isConfirmPassword = false;
              massage = "invalid";
              color = "red";
            }
          else if (state.userForm.confirmPassword === "") {
            state.isConfirmPassword = false;
            massage = "";
            color = "";
          } else {
            state.isConfirmPassword = false;
            massage = "password not match";
            color = "red";
          }
          state.helperText.confirmPasswordMsg = {
            ...state.helperText.confirmPasswordMsg,
            massage: massage,
            color: color,
          };
          break;
        }
        default:
          break;
      }
    },
    ClearState: () => {
      return initialState;
    },
    Submit: (state, action) => {
      action.payload.preventDefault();
      if (
        state.isEmail === true &&
        state.isFirstName === true &&
        state.isLastName === true &&
        state.isPassword === true &&
        state.isConfirmPassword === true
      ) {
        axios
          .post("/api/register", state.userForm)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
});

export const { setRegisterFormState, Validation, ClearState ,Submit } =
  registerForm.actions;
export default registerForm.reducer;
