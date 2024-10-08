import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent News</Text>
      {/* Add logic for fetching and displaying recent articles */}
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

export default LandingPage;
