import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import Navbar from "../Home/Components/Navbar";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function loadProduct() {
      setLoader(true);
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/users/${id}`,
          {
            signal: controller.signal,
          }
        );
        setUser(data);
      } catch (error) {
        if (error?.name === "CanceledError") {
          //   console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoader(false);
      }
    }
    loadProduct();
    return () => {
      controller.abort();
    };
  }, [id]);

  console.log(user);
  return (
    <>
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <section className="bg-slate-100 h-screen py-10">
          <div className="card bg-base-100 shadow-xl max-w-6xl mx-4 lg:mx-auto lg:flex-row">
            <div className="card-body mx-auto">
              <h2 className="card-title text-4xl capitalize font-semibold">
                Full name : {user?.name?.firstname} {user?.name?.lastname}
              </h2>
              <h2 className="text-xl font-semibold text-indigo-500">
                Email : {user?.email}
              </h2>
              <h2 className="text-lg font-semibold text-yellow-500">
                Phone : {user?.phone}
              </h2>
              <p>Username : {user?.username}</p>
              <p>
                Address : {user?.address?.city} Street : {user?.address?.street}{" "}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default UserDetails;
