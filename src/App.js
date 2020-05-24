import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Colors } from './theme';
import store from './state/store';
import HomeScreen from './components/screens/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <HomeScreen />
          </ScrollView>
        </SafeAreaView>
      </View>
    </Provider>
  );
};

export default App;
