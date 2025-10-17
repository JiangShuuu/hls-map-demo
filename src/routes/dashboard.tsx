import { createRoute, redirect } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { isAuthenticated } from '../utils/tokenManager';
import Dashboard from '../pages/Dashboard';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: async () => {
    // 檢查是否已登入，未登入則跳轉到登入頁
    if (!isAuthenticated()) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: Dashboard,
});
