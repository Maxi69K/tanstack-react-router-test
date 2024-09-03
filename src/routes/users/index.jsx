import { createFileRoute } from '@tanstack/react-router';
import UsersPage from '../../pages/UsersPage';

export const Route = createFileRoute('/users/')({
  component: UsersComponent,
});

function UsersComponent() {
  return <UsersPage />;
}
