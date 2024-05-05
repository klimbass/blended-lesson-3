import { Container, CountryList, Heading, Loader, Section } from "components";
import useFetchCountries from "../hooks/useFetchCountries";

const Home = () => {
  const {countries, error, loading} = useFetchCountries();
  return (
    <Section>
      <Container>
        {error && <Heading title="Sorry, we have some troubles." bottom />}
        {loading && <Loader/>}
        {countries.length > 0 && <CountryList countries={countries}/>}
      </Container>
    </Section>
  );
};

export default Home;

