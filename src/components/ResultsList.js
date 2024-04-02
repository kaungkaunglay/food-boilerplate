import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'; 
import ResultDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";
const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList showsHorizontalScrollIndicator={false} horizontal={true} renderItem={({item}) => {
            return ( <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}><ResultDetail result={item}/></TouchableOpacity>)
        }} data={results} keyExtractor={(result) => result.id}/>
    </View>
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
}); 
export default withNavigation(ResultsList);