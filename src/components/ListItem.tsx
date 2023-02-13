import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

import styles from '../stylesheets/components/_list-item.scss';

function ListItem({name, icon, action}) {
  return (
    <View style={styles['list-item']}>
      <Text style={styles['list-item__text']}>{name}</Text>
      <Button type="clear" onPress={action}>
        <FontAwesomeIcon
          icon={icon}
          style={styles['list-item__icon']}
          size={30}
        />
      </Button>
    </View>
  );
}

export default ListItem;
