import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import Categories from "./Components/Categories";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function loadProducts() {
      setLoader(true);
      try {
        if (slug) {
          const { data } = await axios.get(
            `https://fakestoreapi.com/products/category/${slug}`,
            {
              signal: controller.signal,
            }
          );
          setProducts(data);
        } else {
          const { data } = await axios.get(
            "https://fakestoreapi.com/products",
            {
              signal: controller.signal,
            }
          );
          setProducts(data);
        }
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
  }, [slug]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCategories() {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/categories",
          {
            signal: controller.signal,
          }
        );

        setCategories(data);
      } catch (error) {
        if (error?.name === "CanceledError") {
          //   console.log(error);
        } else {
          console.log(error);
        }
      }
    }
    loadCategories();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main className="bg-slate-200 ">
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <div className="flex justify-between items-start max-w-6xl mx-4 lg:mx-auto lg:flex-row flex-col gap-4">
          <section className="lg:w-[20%] w-full">
            <Categories categories={categories} />
          </section>
          <div className="lg:w-[80%]">
            <Products products={products} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
