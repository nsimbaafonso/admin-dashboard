import { useState } from 'react'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Header from '../components/common/Header'
import StatCard from '../components/common/StatCard'
import AddButton from '../components/common/AddButton'
import FullScreenModal from '../components/common/FullScreenModal'
import UsersTable from '../components/users/UsersTable'
import UserGrowthChart from '../components/users/UserGrowthChart'
import UserActivityHeatmap from '../components/users/UserActivityHeatmap'
import UserDemographicsChart from '../components/users/UserDemographicsChart'

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: '2.4%',
}

const UsersPage = () => {
  useDocumentTitle('Clientes | Dashboard')

  useDocumentTitle('Produtos | Dashboard')

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // lógica de envio
    setShowModal(false)
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Clientes" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de Clientes"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="Novos Clientes Hoje"
            icon={UserPlus}
            value={userStats.newUsersToday}
            color="#10B981"
          />
          <StatCard
            name="Clientes Ativos"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Taxa de Evasão"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />
        <AddButton
          onClick={() => setShowModal(true)}
          label="Adicionar Cliente"
        />

        {/* Modal que abre o formulário de cadastro de clientes */}
        {showModal && (
          <FullScreenModal
            title="Adicionar Cliente"
            onClose={() => setShowModal(false)}
          >
            {/* Formulário aqui */}
            <form onSubmit={e => e.preventDefault()}>
              {/* Linha com dois inputs */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-100 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Digite o nome do cliente"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="exemplo@gmail.com"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Select em outra linha */}
              <div className="mb-6">
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium text-gray-100 mb-1"
                >
                  Status
                </label>
                <select
                  required
                  id="categoria"
                  className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="" selected disabled>
                    Selecione um Status
                  </option>
                  <option value="Ativo" className="text-gray-900">
				  		Ativo
                  </option>
				  <option value="Inativo" className="text-gray-900">
				  		Inativo
                  </option>
                </select>
              </div>

			  <div className='mb-6'>
                  <label
                    htmlFor="imagem"
                    className="block text-sm font-medium text-gray-100 mb-1"
                  >
                    Imagem do Usuário
                  </label>
                  <input
                    type="file"
                    id="imagem"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

              {/* Botão de envio */}
              <div className="flex justify-between gap-2">
                <button
                  type="reset"
                  className="w-full cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Limpar
                </button>
                <button
                  type="submit"
                  className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
                >
                  Adicionar Cliente
                </button>
              </div>
            </form>
          </FullScreenModal>
        )}

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  )
}
export default UsersPage
