import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByRegion, getCountries } from "service/countryApi";

const useFetchByRegion = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const region = searchParams.get("query");

    useEffect(() => {
        if (!region){
            return
        }
        const fetchData = async () => {
            setLoading(true);
            try {
                setError(null);
                const data = await fetchByRegion(region);
                setCountries(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [region]);

    const onHandleSubmit = (value) => {
        setSearchParams({
            query: value,
        })
    }

    return {countries, error, loading, onHandleSubmit}
}

export default useFetchByRegion
