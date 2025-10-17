import { useNavigate } from '@tanstack/react-router';
import { removeToken } from '../utils/tokenManager';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate({ to: '/login' });
  };

  return (
    <header className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition transform hover:-translate-y-0.5 hover:shadow-lg"
      >
        登出
      </button>
    </header>
  );
}

export default Header;
