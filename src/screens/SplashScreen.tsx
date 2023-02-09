import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons/faStopwatch';
import translate from '../i18n/translate';

import styles from '../stylesheets/screens/_splash-screen.scss';

function SplashScreen({navigation}): JSX.Element {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (loaded) {
      navigation.replace('Home');
    }
  }, [navigation, loaded]);

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.top}>
        <Text style={styles.title}>{translate('splash.title')}</Text>
        <Text style={styles.subtitle}>{translate('splash.subtitle')}</Text>
      </View>
      <View style={styles.bottom}>
        <FontAwesomeIcon icon={faStopwatch} style={styles.clock} size={90} />
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
