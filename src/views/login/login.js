import { reduxForm } from "redux-form";
import { isEmail } from "validator";
import Login from "./components/login.js";


export default reduxForm({
    enableReinitialize: true,
    form: "loginForm",
})(Login);
