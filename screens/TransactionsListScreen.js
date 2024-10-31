import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransactionsListScreen = ({ navigation, route }) => {
  const { transactions } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
    >
      <View style={styles.itemContent}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemAuthorizer}>{item.authorizer}</Text>
        </View>
        <View style={styles.itemAmountContainer}>
          <Text style={[styles.itemAmount, item.amount < 0 ? styles.negativeAmount : styles.positiveAmount]}>
            {item.amount < 0 ? `-$${Math.abs(item.amount).toFixed(2)}` : `+$${item.amount.toFixed(2)}`}
          </Text>
          <Text style={styles.itemDate}>{item.date}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#000" style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
  },
  itemAmountContainer: {
    alignItems: 'flex-end',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemAuthorizer: {
    fontSize: 14,
    color: '#555',
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveAmount: {
    color: 'green',
  },
  negativeAmount: {
    color: 'red',
  },
  itemDate: {
    fontSize: 14,
    color: '#555',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default TransactionsListScreen;