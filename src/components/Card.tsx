import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../utils/styles';

type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card(props: CardProps) {
  const {title, children} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.card__title}>{title}</Text>
      {children}
    </View>
  );
}

export default Card;
