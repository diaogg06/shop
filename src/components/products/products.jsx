import Product from "../product/product";


function Products({products}) {

  return (
    <div>
      {
      products.map((product) => 
        <Product key={product.id} name={product.name} price={product.price} />
      )
      }
    </div>
  );
}


export default Products;