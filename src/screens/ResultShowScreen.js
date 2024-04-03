import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { ScrollView } from "react-native-gesture-handler";

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null); 
    const id = navigation.getParam('id'); 
    console.log(result);
    const getResult = async (id) => {
       const response =  await yelp.get(`/${id}`);
       setResult(response.data); 
    }; 
    useEffect(() => {
        getResult(id);
    },[]); 
    if(!result){
        return null;
    }
    return   <View>
    
    <FlatList
        style={styles.images}
        data={result.photos}
        keyExtractor={photo => photo}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
         horizontal={true}
        renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}}/>;
        }}
    />
    <Text style={styles.title}>{result.name}</Text>
        
  </View>
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        height: 200, 
        width: 300,
        marginRight: 10,
        marginLeft: 10
    },
    images: {
        display: 'flex',
        flexDirection: 'row'
    }
}); 
export default ResultShowScreen;