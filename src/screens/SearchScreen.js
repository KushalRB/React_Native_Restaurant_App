import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const[searchApi, errorMessage, result] = useResults()

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChanged={(newTerm) => setTerm(newTerm)}
        onEndEdit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {result.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
  },
});

export default SearchScreen;
