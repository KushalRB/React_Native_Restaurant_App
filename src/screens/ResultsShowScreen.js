import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const id = route.params.id

  const [result, setResult] = useState(null);

  const getResult = async (business_id) => {
    const response = await yelp.get(`/${business_id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if(result == null){
    return null;
  }

  return (
    <View>
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({item}) => {

             return <Image style={styles.imageStyle} source={{ uri: item }} />;
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 240,
    width: 420,
  },
});

export default ResultsShowScreen;
