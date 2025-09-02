import Authentication from "@/components/Authentication";

const page = () => {
  return (
    <div>
      <Authentication
        authType="Sign Up"
        otherAuthType="Login"
        otherAuthTypeLink="/login"
      />
    </div>
  );
};

export default page;
