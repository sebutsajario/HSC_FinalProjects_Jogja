import { Link } from "react-router-dom";
import FormRegister from "../Fragments/FormRegister";
import AuthLayout from "../Layouts/AuthLayout";


const Register = () => {
    return (
      <AuthLayout title="Register">
        <FormRegister />
        <p className="text-sm mt-5">
          Have an account?{' '}
          <Link to="/login" className="font-bold text-button">
            Login
          </Link>
        </p>
      </AuthLayout>
    );
  };
  export default Register;