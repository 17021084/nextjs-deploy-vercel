import Head from "next/head";
import styles from "./SearchInput.module.css";

export default function SearchInput({...rest}) {
  return <div className={styles.wrapper}>
      <input className={styles.input} {...rest}/>
  </div>;
}
