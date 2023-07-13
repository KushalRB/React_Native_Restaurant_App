import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name} </Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 16
    },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom:4
    
  },
  nameStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
