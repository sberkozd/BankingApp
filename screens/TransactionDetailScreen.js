import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import genericImage from '../assets/banner.png';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={genericImage}
        style={styles.image}
      />
      <Text style={styles.amount}>
        {transaction.amount < 0 ? `-$${Math.abs(transaction.amount).toFixed(2)}` : `+$${transaction.amount.toFixed(2)}`}
      </Text>
      <Text style={styles.title}>{transaction.title}</Text>
      <Text style={styles.authorizer}>{transaction.authorizer}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Transaction Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Transaction Type:</Text>
        <Text style={styles.value}>{transaction.type}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Category:</Text>
        <Text style={styles.value}>{transaction.category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderWidth: 0,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 4,
  },
  authorizer: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default TransactionDetailScreen;