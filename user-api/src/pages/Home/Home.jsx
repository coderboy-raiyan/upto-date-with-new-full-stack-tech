import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";

function Home() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoader(true);
    async function loadProducts() {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/users", {
          signal: controller.signal,
        });
        setUsers(data);
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
    loadProducts();
    return () => {
      controller.abort();
    };
  }, []);

  console.log(users);

  return (
    <main className="bg-slate-200 ">
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <div className="max-w-6xl mx-4 lg:mx-auto">
          <div className="w-full">
            <Users users={users} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
