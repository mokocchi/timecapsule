import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './src/stylesheets/_navigation.scss';

import HomeScreen from './src/screens/HomeScreen';
import ExtraScreen from './src/screens/ExtraScreen';
import SplashScreen from './src/screens/SplashScreen';
import translate from './src/i18n/translate';
import {faListDots} from '@fortawesome/free-solid-svg-icons/faListDots';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from '@rneui/themed';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Extra: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const renderMenuIcon = () => (
    <Button
      type="clear"
      icon={
        <FontAwesomeIcon icon={faListDots} style={styles.menuIcon} size={20} />
      }
    />
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitle: translate('common.appName'),
          headerStyle: styles.titleHeader,
          headerTitleStyle: styles.titleText,
          headerTintColor: 'white',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerRight: renderMenuIcon,
          }}
        />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
