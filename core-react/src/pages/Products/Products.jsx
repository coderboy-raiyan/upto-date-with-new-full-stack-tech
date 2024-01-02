import { useLoaderData, useNavigation } from "react-router-dom";

function Products() {
  const products = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      Products
      {JSON.stringify(products)}
    </div>
  );
}

export default Products;
