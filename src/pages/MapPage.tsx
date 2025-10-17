import { useNavigate } from '@tanstack/react-router';
import Layout from '../layouts/Layout';
import Map from '../components/Map';

function MapPage() {
  const navigate = useNavigate();

  return (
    <Layout title="地圖頁面" bgGradient="from-emerald-500 via-cyan-500 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">台北地標地圖</h2>
        <p className="text-gray-600 mb-4">
          這是使用 Leaflet + OpenStreetMap 建立的地圖，標記了台北 101 和中正紀念堂的位置。
        </p>
        <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '500px' }}>
          <Map />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">地標資訊</h3>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-800">台北 101</h4>
            <p className="text-sm text-gray-600">座標: 25.0340°N, 121.5645°E</p>
            <p className="text-sm text-gray-600">曾是世界第一高樓，現為台北最著名的地標</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-gray-800">中正紀念堂</h4>
            <p className="text-sm text-gray-600">座標: 25.0408°N, 121.5180°E</p>
            <p className="text-sm text-gray-600">為紀念蔣中正而建造的紀念堂</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
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

export default MapPage;
