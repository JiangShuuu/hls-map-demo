import { createRoute, redirect } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { isAuthenticated } from '../utils/tokenManager';
import Login from '../pages/Login';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  beforeLoad: async () => {
    // 如果已登入，直接跳轉到首頁
    if (isAuthenticated()) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: Login,
});
