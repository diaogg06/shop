import styles from "./price.module.css";

function Price({count, price}) {

  const countPrice = count * price;

  return (
    <>
      <div className={styles.price}>{countPrice}</div>руб
    </>
  );
}


export default Price;
