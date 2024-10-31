import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './TransactionsListScreen';
import TransactionDetailScreen from './TransactionDetailScreen';

const TransactionsStack = createStackNavigator();

const TransactionsStackNavigator = ({ transactions }) => {
  return (
    <TransactionsStack.Navigator>
      <TransactionsStack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
        initialParams={{ transactions }}
        options={{ headerTitle: 'Chequing (6133)' }}
      />
      <TransactionsStack.Screen
        name="TransactionDetail"
        component={TransactionDetailScreen}
        options={{ headerTitle: 'Transaction Detail' }}
      />
    </TransactionsStack.Navigator>
  );
};

export default TransactionsStackNavigator;