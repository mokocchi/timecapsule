import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStopwatch} from '@fortawesome/free-solid-svg-icons/faStopwatch';
import translate from '../i18n/translate';

import {RootStackParamList} from '../../App';
import {styles} from '../utils/styles';

type SplashScreenProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

function SplashScreen(props: SplashScreenProps): JSX.Element {
  const {navigation} = props;
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
    <SafeAreaView style={styles['splash-screen']}>
      <View style={styles['splash-screen__top']}>
        <Text style={styles['splash-screen__title']}>
          {translate('splash.title')}
        </Text>
        <Text style={styles['splash-screen__subtitle']}>
          {translate('splash.subtitle')}
        </Text>
      </View>
      <View style={styles['splash-screen__bottom']}>
        <FontAwesomeIcon icon={faStopwatch} style={styles.clock} size={90} />
      </View>
    </SafeAreaView>
  );
}

export default SplashScreen;
