import { I18N, Params } from '@gravity-ui/i18n';

import * as ru from './ru.json';
import * as en from './en.json';

const i18n = new I18N();
i18n.registerKeysets('ru', ru);
i18n.registerKeysets('en', en);

i18n.setLang('ru');

export const i18nKiosk = (key: string, params?: Params) => {
  return i18n.i18n('kiosks', key, params);
};
