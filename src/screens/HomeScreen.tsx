import {FAB} from '@rneui/base';
import React from 'react';
import {SafeAreaView, Text, ScrollView, View} from 'react-native';

import styles from '../stylesheets/screens/_home-screen.scss';

const lockedList = [
  '1 days to unlock\n\n',
  '3 days to unlock\n\n',
  '5 days to unlock\n\n',
  '6 days to unlock\n\n',
  '7 days to unlock\n\n',
  '8 days to unlock\n\n',
  '9 days to unlock\n\n',
];

function HomeScreen({navigation}): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={styles.view}>
        <Text style={styles.text}>*Available*</Text>
        {lockedList.map((item, index) => (
          <View key={`locked-list${index}`}>
            <View style={styles.gap} />
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      <FAB
        style={styles.icon}
        icon={{name: 'lock', color: 'white'}}
        placement="right"
        color="#dd0202"
        size="large"
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
