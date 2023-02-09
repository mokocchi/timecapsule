import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

import styles from '../stylesheets/components/_card-list-item.scss';

function CardListItem({name, icon, action}) {
  return (
    <View style={styles['card-list-item']}>
      <Text style={styles['card-list-item__text']}>{name}</Text>
      <Button type="clear" onPress={action}>
        <FontAwesomeIcon
          icon={icon}
          style={styles['card-list-item__icon']}
          size={30}
        />
      </Button>
    </View>
  );
}

export default CardListItem;
