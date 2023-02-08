import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import translate from '../i18n/translate';

import styles from '../stylesheets/screens/_splash-screen.scss';

function SplashScreen({navigation}): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (loaded) {
      //navigation.replace('Home');
    }
  }, [navigation, loaded]);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <Text style={styles.title}>{translate('splash.title')}</Text>
        <Text style={styles.subtitle}>{translate('splash.subtitle')}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.clock}>{'Tic toc'}</Text>
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
