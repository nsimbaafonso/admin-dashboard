import { useState } from "react";
import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import AddButton from "../components/common/AddButton";
import FullScreenModal from "../components/common/FullScreenModal";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import ProductsTable from "../components/products/ProductsTable";

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";

const ProductsPage = () => {
	useDocumentTitle("Produtos | Dashboard");

	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		// lógica de envio
		setShowModal(false);
	};

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Produtos' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total de Produtos' icon={Package} value={1234} color='#6366F1' />
					<StatCard name='Top Vendas' icon={TrendingUp} value={89} color='#10B981' />
					<StatCard name='Estoque Baixo' icon={AlertTriangle} value={23} color='#F59E0B' />
					<StatCard name='Receita Total' icon={DollarSign} value={"543.210 Kz"} color='#EF4444' />
				</motion.div>

				<ProductsTable />
				<AddButton onClick={() => setShowModal(true)} label="Adicionar Produto" />

				{showModal && (
				<FullScreenModal title="Adicionar Produto" onClose={() => setShowModal(false)}>
					{/* Formulário aqui */}
					<form onSubmit={(e) => e.preventDefault()}>
						{/* Linha com dois inputs */}
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
							<div>
								<label htmlFor="nome" className="block text-sm font-medium text-gray-100 mb-1">
									Nome
								</label>
								<input
									type="text"
									id="nome"
									placeholder="Digite o nome do produto"
									required
									className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>

							<div>
								<label htmlFor="preco" className="block text-sm font-medium text-gray-100 mb-1">
									Preço
								</label>
								<input
									type="number"
									id="preco"
									placeholder="Digite o preço do produto"
									required
									className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								/>
							</div>
						</div>

						{/* Select em outra linha */}
						<div className="mb-6">
							<label htmlFor="categoria" className="block text-sm font-medium text-gray-100 mb-1">
								Categoria
							</label>
							<select
								required
								id="categoria"
								className="w-full border border-gray-300  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							>
								<option value="" selected disabled>Selecione uma categoria</option>
								<option value="Frutas" className="text-gray-900">Frutas</option>
								<option value="Frutos" className="text-gray-900">Frutos</option>
								<option value="Legumes" className="text-gray-900">Legumes</option>
							</select>
						</div>

						{/* Botão de envio */}
						<div className="flex justify-between gap-2">
							<button type="reset"
								className="w-full cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
							>
							Limpar
							</button>
							<button type="submit"
								className="w-full  cursor-pointer bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
							>
								Adicionar Produto
							</button>
						</div>
					</form>
				</FullScreenModal>
				)}

				{/* Gráficos */}
				<div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<SalesTrendChart />
					<CategoryDistributionChart />
				</div>
			</main>
		</div>
	);
};
export default ProductsPage;
