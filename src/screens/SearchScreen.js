import React, { useState } from "react";
import { Text, View, StyleSheet} from "react-native"
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [result, setResult] = useState([])

    const searchApi = async ()=>{
        const response = await yelp.get('/search',{
            params:{
                term: {term},
                location: 'san jose',
            }
        })
        setResult(response.data.businesses)

    }
    return(
        <View style={styles.background}>
            <SearchBar 
                term = {term} 
                onTermChanged ={(newTerm) => setTerm(newTerm)}
                onEndEdit = {()=> searchApi()}
            />
            <Text>We have found {result.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#FFFFFF'
    }
})

export default SearchScreen