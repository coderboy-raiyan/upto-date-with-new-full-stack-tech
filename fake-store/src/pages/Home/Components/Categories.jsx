import { NavLink } from "react-router-dom";

function Categories({ categories }) {
  return (
    <div>
      <h4 className="text-2xl  font-bold bg-white py-5 rounded-lg px-4 text-center lg:text-start m-10 lg:m-0  lg:mt-8 shadow">
        Categories
      </h4>
      <ul className="capitalize font-bold shadow flex-row bg-white py-10 lg:py-0 lg:h-screen mt-5  rounded-lg flex m-10 lg:mt-10 lg:flex-col lg:m-0  items-center lg:pl-8 justify-center flex-wrap lg:items-start lg:justify-start">
        {categories?.map((cate) => (
          <NavLink
            to={`/category/${cate}`}
            className={({ isActive }) =>
              `border-b-2 ${
                isActive ? "text-indigo-500" : "text-gray-500"
              }  block me-6 mt-4`
            }
            key={crypto.randomUUID()}
          >
            <li>{cate}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
