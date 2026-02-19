import { Link } from 'react-router-dom';
import { Building2, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Event Compliance Portal</h1>
                <p className="text-xs text-gray-500">NAAC Accredited Institution</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
