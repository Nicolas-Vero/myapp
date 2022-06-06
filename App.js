/**
 * This Module is an entry point of the App for React Native.
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { initializeStore } from './initializeStore';
import Header from './mobile/components/header/headerComponent.js';
import { Footer } from './mobile/components/footer/footerComponent.js';
import MainComponent from './mobile/components/mainContent/mainBodyComponent.js';

const store = initializeStore();

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
    overflow: 'scroll',
  },
  color: {
    color: '#f5deb3',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <MainComponent />
          <Footer />
        </View>
      </Provider>
    );
  }
}
