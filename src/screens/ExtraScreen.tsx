import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../utils/styles';

function ExtraScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Text style={styles.text}>React Native</Text>
      </View>
    </SafeAreaView>
  );
}

export default ExtraScreen;
