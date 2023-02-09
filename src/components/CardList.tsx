import React from 'react';
import {Text, View} from 'react-native';

import styles from '../stylesheets/components/_card-list.scss';
import CardListItem from './CardListItem';

function CardList({title, items, icon}) {
  return (
    <View style={styles['card-list']}>
      <Text style={styles['card-list__title']}>{title}</Text>
      {items.map((item, index) => (
        <CardListItem
          key={`card-list-item-${index}`}
          name={item.name}
          icon={icon}
          action={() => console.log('item')}
        />
      ))}
    </View>
  );
}

export default CardList;
