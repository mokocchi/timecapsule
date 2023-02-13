import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';

import styles from '../stylesheets/components/_number-badge.scss';

type NumberBadgeProps = {
  number: number;
};
function NumberBadge(props: NumberBadgeProps) {
  const {number} = props;
  return (
    <View style={styles['number-badge']}>
      <Text style={styles['number-badge__text']}>{number}</Text>
    </View>
  );
}

export default NumberBadge;
