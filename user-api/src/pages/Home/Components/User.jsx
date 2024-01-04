import { Link } from "react-router-dom";

function User({ id, name, email, username, phone }) {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          Name : {name?.firstname} {name?.lastname}
        </h2>
        <h2 className="text-lg font-semibold text-indigo-500">
          Email : {email}
        </h2>
        <p className="">Username : {username}</p>
        <p className="">Phone : {phone}</p>
        <div className="card-actions justify-end">
          <Link to={`/user/${id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
