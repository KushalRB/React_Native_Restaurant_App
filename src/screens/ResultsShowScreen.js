import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  
  const [result, setResult] = useState(null);

  const getResult = async (business_id) => {
    console.log('id :',business_id)
    const response = await yelp.get(`/${business_id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  console.log(result);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
