import React from "react";
import { useNavigate } from "react-router";
import FormField from "../components/FormField";

const Login = () => {
  let navigate = useNavigate();

  const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const [error, setError] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username === "" || data.password === "") {
      setError(true);
      return;
    }
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/home");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Login</h1>
      </div>
      <form className="mt-6 max-w-3l" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Username"
            type="text"
            placeholder="Enter your username"
            name="username"
            value={data.username}
            handleChange={handleChange}
          />
          <FormField
            labelName="Enter your password"
            type="password"
            placeholder="Enter you password"
            name="password"
            value={data.password}
            handleChange={handleChange}
          />
        </div>
        {error && <p className="danger">Please fill all necessary details</p>}
        <button
          type="submit"
          className="mt-3 text-white bg-[#f05136] font-medium rounded-md
          text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
