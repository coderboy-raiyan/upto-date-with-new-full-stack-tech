import { Outlet, useNavigation } from "react-router-dom";

function Layout() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

export default Layout;
