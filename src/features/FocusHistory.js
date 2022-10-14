import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const FocusHistory = ({ history = [] }) => {
  if (!history || !history.length) return <Text>Haven't focused on anything.</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>* {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    textAlign: 'left',
    padding: spacing.md,
    fontWeight: 'bold',
    paddingLeft: '20px',
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingLeft: '10px',
  },
});
export default FocusHistory;
