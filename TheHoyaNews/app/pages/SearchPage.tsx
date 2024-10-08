import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Articles</Text>
      <TextInput style={styles.input} placeholder="Search..." />
      {/* Add logic for search functionality */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
});

export default SearchPage;
