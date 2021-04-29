import styles from "./CountriesTable.module.css";
import Link from "next/link";
export default function CountriesTable({ countries }) {
  console.log(countries)
  return (
    <div>
      <button> Name</button>
      <button> Population</button>

      {countries.map((country) => (
        <div className={styles.row}>
          <div> {country.name}</div>
          <div>: ____ {country.population}</div>
          <div>
            : ____ <Link href= {`/country/${country.alpha3Code}`} >chi tiet</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
