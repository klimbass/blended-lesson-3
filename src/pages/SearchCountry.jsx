import { Container, Heading, SearchForm, Section, CountryList, Loader } from "components";
import useFetchByRegion from "../hooks/useFetchByRegion";

const SearchCountry = () => {
  const {countries, error, loading, onHandleSubmit} = useFetchByRegion()
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHandleSubmit}/>
        {error && <Heading title="Sorry, we have some troubles." bottom />}
        {loading && <Loader/>}
        {countries.length > 0 && <CountryList countries={countries}/>}      </Container>
    </Section>
  );
};

export default SearchCountry;
