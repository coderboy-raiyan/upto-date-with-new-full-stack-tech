import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import Navbar from "../Home/Components/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function loadProduct() {
      setLoader(true);
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
          {
            signal: controller.signal,
          }
        );
        setProduct(data);
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

  return (
    <>
      <Navbar />

      {loader ? (
        <Loader />
      ) : (
        <section className="bg-slate-100  py-10">
          <div className="card bg-base-100 shadow-xl max-w-6xl mx-4 lg:mx-auto lg:flex-row">
            <figure className="lg:w-[30%] w-full my-10">
              <img
                className="w-[400px] h-[400px] object-contain"
                src={product?.image}
                alt=""
              />
            </figure>
            <div className="card-body lg:w-[70%] w-full lg:mx-10">
              <h2 className="card-title">{product?.title}</h2>
              <h2 className="text-xl font-semibold text-indigo-500">
                Price : ${product?.price}
              </h2>
              <h2 className="text-lg font-semibold text-yellow-500">
                Ratings : ⭐ {product?.rating?.rate}
              </h2>
              <p>{product?.description}</p>
              <div className="card-actions ">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
