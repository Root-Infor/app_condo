import React from 'react';
import { Car, Save } from 'lucide-react';

export default function VehicleForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-2 pb-4 border-b">
        <Car className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Cadastro de Veículo</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Placa</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Modelo</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cor</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Unidade</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo</label>
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          >
            <option>Carro</option>
            <option>Moto</option>
            <option>Outro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Vaga</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Save className="h-4 w-4" />
          Salvar
        </button>
      </div>
    </form>
  );
}