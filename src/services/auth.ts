// 模擬 API 登入服務

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

// 模擬 API 登入請求
export const mockLogin = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  // 模擬網路延遲
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 簡單的驗證邏輯（測試用帳號: admin/admin123）
  if (credentials.username === 'admin' && credentials.password === 'admin123') {
    // 生成假的 token（實際應該由後端生成）
    const token = `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return {
      success: true,
      token,
      message: '登入成功'
    };
  }

  return {
    success: false,
    message: '帳號或密碼錯誤'
  };
};

// 模擬 token 驗證
export const mockVerifyToken = async (token: string): Promise<boolean> => {
  // 模擬網路延遲
  await new Promise(resolve => setTimeout(resolve, 300));

  // 檢查 token 格式
  return token.startsWith('mock_token_');
};
