import {faStopwatch} from '@fortawesome/free-solid-svg-icons/faStopwatch';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FAB} from '@rneui/base';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {RootStackParamList} from '../../App';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import LockedItemsList from '../components/LockedItemsList';
import {styles} from '../utils/styles';

const lockedList = [
  '1 days to unlock\n\n',
  '3 days to unlock\n\n',
  '5 days to unlock\n\n',
  '6 days to unlock\n\n',
  '7 days to unlock\n\n',
  '8 days to unlock\n\n',
  '9 days to unlock\n\n',
];
const available = [{name: 'Milanesas'}, {name: 'Helado'}];

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen(props: HomeScreenProps): JSX.Element {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles['home-screen']}>
      <ScrollView style={styles['home-screen__view']}>
        <Card title="Available">
          {available.map((item, index) => (
            <ListItem
              key={`card-list-item-${index}`}
              name={item.name}
              icon={faStopwatch}
              action={() => console.log('item')}
            />
          ))}
        </Card>
        {lockedList.map((item, index) => (
          <LockedItemsList key={`locked-list${index}`} />
        ))}
      </ScrollView>
      <FAB
        style={styles['home-screen__icon']}
        icon={{name: 'lock', color: 'white'}}
        placement="right"
        color="#dd0202"
        size="large"
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
