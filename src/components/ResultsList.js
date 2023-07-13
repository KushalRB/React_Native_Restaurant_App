import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item})=>{
            return <ResultsDetail result={item}/>
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginBottom: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8
  },
});

export default ResultsList;
