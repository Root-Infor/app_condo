import React, { useState } from 'react';
import {
  LogOut,
  Building2,
  Bell,
  Settings,
  Car,
  Dog,
  Bike,
  AlertTriangle,
  DollarSign,
  Search,
  MessageSquare,
  Users,
} from 'lucide-react';
import UnitForm from './forms/UnitForm';
import VehicleForm from './forms/VehicleForm';
import PetForm from './forms/PetForm';
import NoticeForm from './forms/NoticeForm';
import BillForm from './forms/BillForm';
import LostItemForm from './forms/LostItemForm';
import OccurrenceForm from './forms/OccurrenceForm';
import BikeForm from './forms/BikeForm';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  onLogout: () => void;
}

const menuItems = [
  { icon: Users, label: 'Unidades', count: 48, component: UnitForm },
  { icon: Car, label: 'Veículos', count: 72, component: VehicleForm },
  { icon: Dog, label: 'Pets', count: 25, component: PetForm },
  {
    icon: MessageSquare,
    label: 'Mural de Avisos',
    count: 12,
    component: NoticeForm,
  },
  { icon: DollarSign, label: 'Contas a Pagar', count: 8, component: BillForm },
  {
    icon: Search,
    label: 'Objetos Perdidos',
    count: 5,
    component: LostItemForm,
  },
  {
    icon: AlertTriangle,
    label: 'Ocorrências',
    count: 3,
    component: OccurrenceForm,
  },
  { icon: Bike, label: 'Bicicletas', count: 15, component: BikeForm },
];

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [selectedMenu, setSelectedMenu] = useState('Unidades');

  const ActiveForm =
    menuItems.find((item) => item.label === selectedMenu)?.component ||
    UnitForm;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-semibold text-gray-900">
                Condo Manager Pro
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              {/* <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings<boltAction type="file" filePath="src/components/Dashboard.tsx" continued>                className="h-6 w-6" />
              </button> */}
              <button
                onClick={onLogout}
                className="flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">
                Bem-vindo, {user.name}!
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {user.role === 'admin' ? 'Administrador' : 'Morador'}
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setSelectedMenu(item.label)}
                    className={`${
                      selectedMenu === item.label
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    } overflow-hidden shadow rounded-lg border transition-colors duration-200`}
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <item.icon
                            className={`h-6 w-6 ${
                              selectedMenu === item.label
                                ? 'text-blue-600'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {item.label}
                            </dt>
                            <dd className="flex items-baseline">
                              <div className="text-2xl font-semibold text-gray-900">
                                {item.count}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-6">
            <ActiveForm />
          </div>
        </div>
      </main>
    </div>
  );
}
