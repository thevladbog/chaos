import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/changelog/')({
  component: () => <div>Hello /changelog/!</div>,
});
