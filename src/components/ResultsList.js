import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const ResultsList = ({ title, results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text>Results : {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
