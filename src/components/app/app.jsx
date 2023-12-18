import styles from "./app.module.css";
import Products from "../products/products";
import data from "../../utils/data";


function App() {

  return (
    <>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.container}>
        <Products products={data.products} />
      </div>
    </>
  );
}


export default App;
