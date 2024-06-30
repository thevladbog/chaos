import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';
import { Button, Icon, TextInput } from '@gravity-ui/uikit';
import { Magnifier, CirclePlus } from '@gravity-ui/icons';

import { KiosksTable } from '../../components/KiosksTable/KiosksTable';

import { i18nKiosk } from '../../components/KiosksTable/i18n';

import styles from './kiosks.module.scss';

export const Route = createFileRoute('/kiosks/')({
  component: Kiosks,
});

function Kiosks() {
  const [search, setSearch] = React.useState<string>('');

  return (
    <div className={styles.main}>
      <Helmet>
        <title>{i18nKiosk('title')}</title>
        <meta name="description" content="I am an about page" />
      </Helmet>
      <div className={styles.header}>
        <TextInput
          view="normal"
          size="l"
          startContent={<Icon data={Magnifier} size={20} />}
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={i18nKiosk('searchPlaceholder')}
        />
        <Button size="l" view="action" pin="circle-circle">
          <Icon data={CirclePlus} size={20} />
          {i18nKiosk('new')}
        </Button>
      </div>
      <KiosksTable />
    </div>
  );
}
