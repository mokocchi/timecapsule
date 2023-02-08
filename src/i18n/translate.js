import memoize from 'lodash.memoize';
import {I18n} from 'i18n-js';
import en from './en.json';

const i18n = new I18n({en});

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export default translate;
