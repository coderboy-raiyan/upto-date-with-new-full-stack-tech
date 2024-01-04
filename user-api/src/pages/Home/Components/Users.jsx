import User from "./User";

function Users({ users }) {
  return (
    <section>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-6 py-10">
        {users?.map((pd) => (
          <User key={pd?.id} {...pd} />
        ))}
      </div>
    </section>
  );
}

export default Users;
