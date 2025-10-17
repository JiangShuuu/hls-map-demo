import { useNavigate } from '@tanstack/react-router';
import { removeToken, getToken } from '../utils/tokenManager';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const token = getToken();

  const handleLogout = () => {
    // 移除 token
    removeToken();

    // 跳轉回登入頁
    navigate({ to: '/login' });
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <header className="home-header">
          <h1>歡迎進入系統</h1>
          <button onClick={handleLogout} className="logout-button">
            登出
          </button>
        </header>

        <div className="info-card">
          <h2>登入資訊</h2>
          <div className="info-item">
            <span className="label">Token:</span>
            <span className="value">{token}</span>
          </div>
          <div className="info-item">
            <span className="label">狀態:</span>
            <span className="value success">已驗證</span>
          </div>
        </div>

        <div className="welcome-message">
          <p>這是一個受保護的頁面，只有登入後才能訪問。</p>
          <p>當你重新整理頁面時，系統會自動檢查 localStorage 中的 token。</p>
          <p>如果 token 無效或不存在，會自動跳轉回登入頁面。</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
