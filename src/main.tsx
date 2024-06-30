import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { configure } from '@gravity-ui/uikit';
import { createRoot, Root } from 'react-dom/client';
import { ThemeProvider } from '@gravity-ui/uikit';

import './main.css';

configure({
  lang: 'ru',
});

import { routeTree } from './routeTree.gen';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const queryClient: QueryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement: HTMLElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root: Root = createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme="dark">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>,
  );
}
