function Home() {
  return (
    <div>
      <form>
        <input type="text" name="first_name" placeholder="First Name" />
        <br />
        <input type="text" name="last_name" placeholder="Last Name" />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
