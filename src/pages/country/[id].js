import Layout from "../../components/Layout/Layout";

export default function Country({ country }) {
    console.log(country)
  return (
    <Layout>
      <div>
        <img src={country.flag} />
        <h1>country name : {country.name}</h1>
        <div>country name : {country.region}</div>
        <div>country name : {country.area}</div>
        <div>country name : {country.population}</div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();
  return {
    props: {
      country,
    },
  };
};
