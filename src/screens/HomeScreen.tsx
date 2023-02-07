import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';

import styles from '../stylesheets/screens/_home-screen.scss';

function HomeScreen({navigation}): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.text}>React Native</Text>
        <Button
          title="Go to Extra"
          onPress={() => navigation.navigate('Extra')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
