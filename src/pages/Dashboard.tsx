import { useNavigate } from '@tanstack/react-router';
import Layout from '../layouts/Layout';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <Layout title="儀表板頁面" bgGradient="from-blue-500 via-teal-500 to-green-500">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">這是一個受保護的頁面</h2>
        <p className="text-gray-600 text-lg mb-6">
          這裡是儀表板的內容，只有登入後才能看到這個頁面。
        </p>
        <button
          onClick={() => navigate({ to: '/' })}
          className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          返回首頁
        </button>
      </div>
    </Layout>
  );
}

export default Dashboard;
