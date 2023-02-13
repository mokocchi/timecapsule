import React from 'react';
import {Text, View} from 'react-native';

import styles from '../stylesheets/components/_card.scss';

function Card({title, children}) {
  return (
    <View style={styles.card}>
      <Text style={styles.card__title}>{title}</Text>
      {children}
    </View>
  );
}

export default Card;
