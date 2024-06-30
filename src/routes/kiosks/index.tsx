import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

import { KiosksTable } from '../../components/KiosksTable/KiosksTable';

import { i18nKiosk } from '../../components/KiosksTable/i18n';

import styles from './kiosks.module.scss';

export const Route = createFileRoute('/kiosks/')({
  component: Kiosks,
});

function Kiosks() {
  return (
    <div className={styles.main}>
      <Helmet>
        <title>{i18nKiosk('title')}</title>
        <meta name="description" content="I am an about page" />
      </Helmet>
      <KiosksTable />
    </div>
  );
}
