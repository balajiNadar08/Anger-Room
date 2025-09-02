import Authentication from "@/components/Authentication"

const page = () => {
  return (
    <div>
      <Authentication
        authType="Login"
        otherAuthType="Sign Up"
        otherAuthTypeLink="/signup"
      />
    </div>
  )
}

export default page;
