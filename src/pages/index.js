import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import CountriesTable from "../components/CountriesTable/CountriesTable";
import { useState } from "react";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");
  const filterCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword)
  );
  const onInputChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.counts}> Found {countries.length} contries</div>
      <SearchInput placeholder=" filter by name " onChange={onInputChange} />
      <CountriesTable countries={filterCountries}  />
    </Layout>
  );
}
// just run on server side
//just update where you rebuild app
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
