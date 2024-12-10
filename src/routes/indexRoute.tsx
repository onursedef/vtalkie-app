import { createRoute, Outlet } from '@tanstack/react-router'
import { DefaultLayout } from '../layouts/default'
import { Route as RootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: RouteComponent
})

function RouteComponent() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  )
}
