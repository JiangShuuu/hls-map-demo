import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree';

// 建立路由實例
const router = createRouter({ routeTree });

// 擴展型別定義
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
