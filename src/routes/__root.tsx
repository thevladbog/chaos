import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Navigation } from '../components/Navigation/Navigation';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navigation />
      <div className="main">
        <Outlet />
      </div>

      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
