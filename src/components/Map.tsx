import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 修復 Leaflet 預設圖標問題
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// 定義地標位置
const locations = [
  {
    name: '台北 101',
    position: [25.0340, 121.5645] as [number, number],
    description: '台北最著名的地標，曾是世界第一高樓'
  },
  {
    name: '中正紀念堂',
    position: [25.0408, 121.5180] as [number, number],
    description: '為紀念蔣中正而建造的紀念堂'
  }
];

function Map() {
  // 地圖中心點設在兩個地標之間
  const center: [number, number] = [25.0374, 121.5413];

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="w-full h-full"
      style={{ minHeight: '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker key={location.name} position={location.position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-1">{location.name}</h3>
              <p className="text-sm text-gray-600">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
