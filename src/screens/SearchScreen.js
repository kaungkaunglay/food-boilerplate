import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageComponent, ScrollView } from 'react-native';
import SearchBar from '../components/Searchbar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults() ;
  const filterResultByPrice = (price) => {
    // price == '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  }
  return (
    <>
        <SearchBar term={term} onTermSubmit={() => searchApi(term)} onTermChange={setTerm}/>
        {errorMessage ? <Text>{errorMessage}</Text>: null}
        <ScrollView>
        <ResultsList results={filterResultByPrice('￥')} title="Cost Effective" />
        <ResultsList results={filterResultByPrice('￥￥')} title="Bit Pricer" />
        <ResultsList results={filterResultByPrice('￥￥￥')} title="Bit Spender" />
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
