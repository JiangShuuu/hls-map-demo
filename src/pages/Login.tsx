import { useState, FormEvent } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { mockLogin } from '../services/auth';
import { setToken } from '../utils/tokenManager';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await mockLogin({ username, password });

      if (response.success && response.token) {
        // 儲存 token 到 localStorage
        setToken(response.token);

        // 跳轉到主頁
        navigate({ to: '/' });
      } else {
        setError(response.message || '登入失敗');
      }
    } catch (err) {
      setError('系統錯誤，請稍後再試');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>登入系統</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">帳號</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="請輸入帳號"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
              required
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? '登入中...' : '登入'}
          </button>
        </form>

        <div className="hint">
          <p>測試帳號：admin</p>
          <p>測試密碼：admin123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
