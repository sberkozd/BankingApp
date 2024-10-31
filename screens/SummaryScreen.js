import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Chip } from 'react-native-paper';

const SummaryScreen = ({ transactions }) => {
  const categories = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = { count: 0, amount: 0 };
    }
    acc[transaction.category].count += 1;
    acc[transaction.category].amount += Math.abs(transaction.amount);
    return acc;
  }, {});

  const categoryColors = {
    Food: '#FF6347',
    Shopping: '#4682B4',
    Refund: '#228B22', 
    Transportation: '#DAA520',
    Cash: '#FF4500',
    Income: '#8A2BE2',
    Entertainment: '#FF69B4',
    Groceries: '#20B2AA',
    Electronics: '#FF8C00'  
  };

  const recentTransactions = transactions.slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions by Category</Text>
      <View style={styles.chipContainer}>
        {Object.keys(categories).map(category => (
          <Chip
            key={category}
            style={[styles.chip, { backgroundColor: categoryColors[category] || '#ccc' }]}
            textStyle={styles.chipText}
          >
            {category}: ${categories[category].amount.toFixed(2)}
          </Chip>
        ))}
      </View>
      <Text style={styles.header}>Recent Transactions</Text>
      <FlatList
        data={recentTransactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
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
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 4,
  },
  chipContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  chipText: {
    fontSize: 16,
    color: '#fff',
  },
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
});

export default SummaryScreen;