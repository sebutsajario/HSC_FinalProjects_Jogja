import AuthLayout from '../Layouts/AuthLayout'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text-sm mt-5">Don't have an account?{' '}
          <Link to="/register" className="font-bold text-button font-Poppins">
            Register
          </Link>
        </p>
      </AuthLayout>
    );
  };
  export default Login;
