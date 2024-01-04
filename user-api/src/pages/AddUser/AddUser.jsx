import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Components/Navbar";

function AddUser() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
  });

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
    const newObj = {
      ...userData,
      name: {
        firstname: userData.firstname,
        lastname: userData.lastname,
      },
    };
    delete newObj.firstname;
    delete newObj.lastname;
    setLoader(true);
    try {
      const { data } = await axios.post(
        "https://fakestoreapi.com/users",
        newObj
      );
      toast.success("Signed up Successfully!");
      navigate("/login");
      console.log(data);
    } catch (error) {
      toast.error("Internal Server error");
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
            <h1 className="text-3xl font-bold text-center">Sign up</h1>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
              required
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              className="input input-bordered w-full "
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              className="input input-bordered w-full "
              required
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full "
              required
              onChange={handleChange}
            />
            {loader ? (
              <button className="btn btn-primary">
                <span className="loading loading-spinner"></span>
                loading
              </button>
            ) : (
              <button className="btn btn-primary" type="submit">
                Sign up
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
