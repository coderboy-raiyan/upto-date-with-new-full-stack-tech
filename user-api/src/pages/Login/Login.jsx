import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Components/Navbar";

function AddUser() {
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({
    username: "mor_2314",
    password: "83r5^_",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/auth/login",
        userData
      );
      toast.success("Signed in Successfully!");
      localStorage.setItem("token", JSON.stringify(data?.token));
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data);
      console.log(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <Navbar />

      <section className="bg-slate-100">
        <div className="flex justify-center items-center h-screen">
          <form
            className="w-2/5 flex flex-col mx-auto space-y-4 bg-white p-10 rounded-lg shadow-2xl"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold text-center">Sign In</h1>

            <input
              type="text"
              placeholder="Username"
              name="username"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
              defaultValue="mor_2314"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full "
              required
              onChange={handleChange}
              defaultValue="83r5^_"
            />
            {loader ? (
              <button className="btn btn-primary">
                <span className="loading loading-spinner"></span>
                loading
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Sign In
              </button>
            )}
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
}

export default AddUser;
