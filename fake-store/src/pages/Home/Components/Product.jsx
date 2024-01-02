import { Link } from "react-router-dom";

function Product({ id, title, description, image, price }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-[200px] h-[200px] object-contain block p-4"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="text-lg font-semibold text-indigo-500">
          Price : ${price}
        </h2>
        <p className="">
          {description?.slice(0, 89)}...{" "}
          <Link to={`/product/${id}`}>
            <button className="text-sm text-indigo-600 underline">
              Details
            </button>
          </Link>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
