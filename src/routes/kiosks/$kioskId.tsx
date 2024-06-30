import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';
import { i18nKiosk } from '../../components/KiosksTable/i18n';

export const Route = createFileRoute('/kiosks/$kioskId')({
  component: KioskId,
});

function KioskId() {
  const { kioskId } = Route.useParams();
  return (
    <div>
      <Helmet>
        <title>{i18nKiosk('titleId', { id: kioskId })}</title>
        <meta name="description" content="I am an about page" />
      </Helmet>
      Hello /kiosks/$kioskId!
    </div>
  );
}
