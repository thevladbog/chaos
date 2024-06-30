import { createFileRoute } from '@tanstack/react-router';
import { Helmet } from 'react-helmet';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div>
      <Helmet>
        <title>CHAOS | Queue management system</title>
        <meta name="description" content="I am an about page" />
      </Helmet>
      <h3>Welcome Home!</h3>
    </div>
  );
}
