import { useState } from "react";
import Counter from "../counter/counter";
import Price from "../price/price";
import styles from "./product.module.css";

function Product({id, name, price}) {

  const [count, setCount] = useState(0);

  return (
    <div className={styles.product} key={id}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counterWithPrice}>
        <Counter count={count} setCount={setCount} />
        <Price count={count} price={price}/>
      </div>
    </div>
  );
}


export default Product;
