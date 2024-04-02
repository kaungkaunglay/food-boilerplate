import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResult] = useState([]); 
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm) => {
      
      try{
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'tokyo'
          }
        });
        setResult(response.data.businesses); 
      }catch(err){
        console.log(err);
      }
    };
    useEffect(() => {
        searchApi('pasta');
      }, []);
      return [searchApi, results, errorMessage]; 
}; 