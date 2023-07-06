import React, { useState } from "react";
import { Text, View, StyleSheet} from "react-native"
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    return(
        <View style={styles.background}>
            <SearchBar 
                term = {term} 
                onTermChanged ={(newTerm) => setTerm(newTerm)}
                onEndEdit = {()=> console.log('term is submitted')}
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#FFFFFF'
    }
})

export default SearchScreen