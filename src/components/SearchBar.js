import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChanged, onEndEdit}) => {
  
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={50} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChanged}
        onEndEditing={onEndEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    margin: 16,
    borderRadius: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 8
  },
});

export default SearchBar;
