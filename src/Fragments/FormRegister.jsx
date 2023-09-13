import InputForm from '../Components/Atoms/Input/Index';
import Button from '../Components/Atoms/ButtonAuth';

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="insert your full name"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="*******"
        name="confirmpassword"
      />

      <Button
        variant="bg-button w-full
      "
      >
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
