import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from '@rneui/themed';
import React from 'react';
import translate from '../i18n/translate';
import CollapsableCard from './CollapsableCard';
import NumberBadge from './NumberBadge';

import styles from '../stylesheets/components/_locked-items-list.scss';

type LockedItemsListProps = {};

function LockedItemsList(props: LockedItemsListProps) {
  return (
    <CollapsableCard
      title={translate('lockedItemsList.title')}
      badge={<NumberBadge number={5} />}
      button={
        <Button
          type="clear"
          icon={
            <FontAwesomeIcon
              icon={faChevronDown}
              style={styles['locked-items-list__icon']}
              size={20}
            />
          }
        />
      }
    />
  );
}

export default LockedItemsList;
