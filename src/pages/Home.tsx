import { useNavigate } from '@tanstack/react-router';
import { removeToken, getToken } from '../utils/tokenManager';

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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <header className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">歡迎進入系統</h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            登出
          </button>
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">登入資訊</h2>
          <div className="space-y-4">
            <div className="flex border-b border-gray-200 pb-3">
              <span className="font-semibold text-gray-700 min-w-20">Token:</span>
              <span className="flex-1 text-gray-600 break-all ml-4">{token}</span>
            </div>
            <div className="flex pb-3">
              <span className="font-semibold text-gray-700 min-w-20">狀態:</span>
              <span className="flex-1 text-green-600 font-semibold ml-4">已驗證</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-3 text-gray-600 leading-relaxed">
            <p>這是一個受保護的頁面，只有登入後才能訪問。</p>
            <p>當你重新整理頁面時，系統會自動檢查 localStorage 中的 token。</p>
            <p>如果 token 無效或不存在，會自動跳轉回登入頁面。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
