import { useNavigate } from '@tanstack/react-router';
import Layout from '../layouts/Layout';
import HLSPlayer from '../components/HLSPlayer';

// 使用公開的測試 HLS 串流（不同的測試影片）
const videoStreams = [
  {
    id: 1,
    title: '監視器 1 - 入口大廳',
    src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', // Big Buck Bunny
  },
  {
    id: 2,
    title: '監視器 2 - 停車場',
    src: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8', // Apple 測試串流
  },
  {
    id: 3,
    title: '監視器 3 - 走廊',
    src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', // Sintel
  },
  {
    id: 4,
    title: '監視器 4 - 會議室',
    src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8', // Tears of Steel
  },
  {
    id: 5,
    title: '監視器 5 - 辦公室',
    src: 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8', // Akamai 測試
  },
  {
    id: 6,
    title: '監視器 6 - 後門',
    src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8', // Bitmovin 測試
  },
  {
    id: 7,
    title: '監視器 7 - 電梯',
    src: 'https://test-streams.mux.dev/tos_ismc/main.m3u8', // 另一個 Mux 測試
  },
  {
    id: 8,
    title: '監視器 8 - 樓梯間',
    src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8', // CloudFront 測試
  },
  {
    id: 9,
    title: '監視器 9 - 側門',
    src: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.mpd/.m3u8', // 另一個測試串流
  },
];

function VideoGrid() {
  const navigate = useNavigate();

  return (
    <Layout title="監視器影像" bgGradient="from-gray-700 via-gray-800 to-gray-900">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">即時監視器畫面</h2>
            <p className="text-gray-600 text-sm mt-1">共 9 個攝影機正在運作</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-600">即時串流中</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoStreams.map((stream) => (
            <HLSPlayer key={stream.id} src={stream.src} title={stream.title} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex gap-4">
          <button
            onClick={() => navigate({ to: '/' })}
            className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            返回首頁
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default VideoGrid;
