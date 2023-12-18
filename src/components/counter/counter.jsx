import styles from './counter.module.css';


function Counter({count, setCount}) {


  const handleRemoveProduct = () => {
    setCount(count - 1)
  }
  const handleAddProduct = () => {
    setCount(count + 1)
  }


  return (
    <div className={styles.containerCounter}>
      <button onClick={handleRemoveProduct} className={styles.counterBtn}>-</button>
      <p>{count}</p>
      <button onClick={handleAddProduct} className={styles.counterBtn}>+</button>
    </div>
  );
  }
  
  
  export default Counter;