import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../utils/styles';

type CollapsableCardProps = {
  title: string;
  badge?: React.ReactNode;
  button?: React.ReactNode;
};

function CollapsableCard(props: CollapsableCardProps) {
  const {title, badge, button} = props;
  return (
    <View style={styles['collapsable-card']}>
      <View style={styles['collapsable-card__badge']}>{badge}</View>
      <Text style={styles['collapsable-card__title']}>{title}</Text>
      <View style={styles['collapsable-card__button']}>{button}</View>
    </View>
  );
}

export default CollapsableCard;
