import React from 'react';
import { DollarSign, Save } from 'lucide-react';

export default function BillForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-2 pb-4 border-b">
        <DollarSign className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Nova Conta a Pagar</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Descrição</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Valor</label>
          <input
            type="number"
            step="0.01"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Vencimento</label>
          <input
            type="date"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Categoria</label>
          <select
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
          >
            <option>Manutenção</option>
            <option>Energia</option>
            <option>Água</option>
            <option>Limpeza</option>
            <option>Segurança</option>
            <option>Outros</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Observações</label>
          <textarea
            rows={3}
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