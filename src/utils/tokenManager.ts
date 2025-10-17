// Token 管理工具

const TOKEN_KEY = 'auth_token';

// 儲存 token 到 localStorage
export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

// 從 localStorage 取得 token
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

// 移除 token
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

// 檢查是否已登入（是否有 token）
export const isAuthenticated = (): boolean => {
  const token = getToken();
  return token !== null && token !== '';
};
