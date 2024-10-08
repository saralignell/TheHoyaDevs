import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CrosswordPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crosswords</Text>
      {/* Add logic for displaying crosswords or links to crosswords */}
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
});

export default CrosswordPage;
