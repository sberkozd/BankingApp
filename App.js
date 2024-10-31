import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TransactionsStackNavigator from './screens/TransactionsStackNavigator';
import SummaryScreen from './screens/SummaryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'POS Purchase', authorizer: 'Opos Uber* Eats Pending Uber', amount: -19.90, date: '2023-10-30', type: 'Debit', category: 'Food' },
    { id: 2, title: 'POS Purchase', authorizer: 'Opos Affirm Canada', amount: -64.01, date: '2024-10-29', type: 'Credit', category: 'Shopping' },
    { id: 3, title: 'Correction', authorizer: 'Opos Uber Canada', amount: 19.44, date: '2024-10-25', type: 'Credit', category: 'Refund' },
    { id: 4, title: 'POS Purchase', authorizer: 'Opos Uber Canada', amount: -17.44, date: '2024-10-24', type: 'Debit', category: 'Transportation' },
    { id: 5, title: 'ATM Withdrawal', authorizer: 'Bank ATM', amount: -100.00, date: '2024-10-23', type: 'Debit', category: 'Cash' },
    { id: 6, title: 'Salary', authorizer: 'Oceanic Airlines', amount: 4816.00, date: '2024-10-22', type: 'Credit', category: 'Income' },
    { id: 7, title: 'POS Purchase', authorizer: 'Opos Starbucks', amount: -5.75, date: '2024-10-21', type: 'Debit', category: 'Food' },
    { id: 8, title: 'POS Purchase', authorizer: 'Opos Amazon', amount: -120.00, date: '2024-10-20', type: 'Credit', category: 'Shopping' },
    { id: 9, title: 'POS Purchase', authorizer: 'Opos Netflix', amount: -15.99, date: '2024-10-19', type: 'Debit', category: 'Entertainment' },
    { id: 10, title: 'POS Purchase', authorizer: 'Opos Walmart', amount: -45.67, date: '2024-10-18', type: 'Debit', category: 'Groceries' },
    { id: 11, title: 'POS Purchase', authorizer: 'Opos Apple Store', amount: -999.99, date: '2024-10-17', type: 'Credit', category: 'Electronics' },
    { id: 12, title: 'POS Purchase', authorizer: 'Opos Best Buy', amount: -299.99, date: '2024-10-16', type: 'Credit', category: 'Electronics' },
    { id: 13, title: 'POS Purchase', authorizer: 'Opos Target', amount: -89.99, date: '2024-10-15', type: 'Debit', category: 'Shopping' },
    { id: 14, title: 'POS Purchase', authorizer: 'Opos McDonalds', amount: -8.99, date: '2024-10-14', type: 'Debit', category: 'Food' },
    { id: 15, title: 'POS Purchase', authorizer: 'Opos Spotify', amount: -9.99, date: '2024-10-13', type: 'Debit', category: 'Entertainment' },
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Transactions"
          children={() => <TransactionsStackNavigator transactions={transactions} />}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Summary"
          children={() => <SummaryScreen transactions={transactions} />}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="pie-chart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}