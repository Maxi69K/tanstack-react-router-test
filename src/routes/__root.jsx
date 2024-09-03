import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import NavComponent from '../components/Nav.Component';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavComponent />
      <div className="container">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
