import Product from "./Product";

function Products({ products }) {
  return (
    <section>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-6 py-10">
        {products?.map((pd) => (
          <Product key={pd?.id} {...pd} />
        ))}
      </div>
    </section>
  );
}

export default Products;
