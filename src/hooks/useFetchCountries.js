import { useEffect, useState } from "react";
import { getCountries } from "service/countryApi";

const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                setError(null);
                const data = await getCountries();
                setCountries(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    return {countries, error, loading}
}

export default useFetchCountries
