import { createFileRoute } from '@tanstack/react-router';
import UsersSettingsPage from '../../pages/UsersSettingsPage';

export const Route = createFileRoute('/users/settings')({
  component: UsersSettingsComponent,
});

function UsersSettingsComponent() {
  return <UsersSettingsPage />;
}