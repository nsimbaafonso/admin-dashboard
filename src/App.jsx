import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import Teste from "./pages/Teste";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

       		{/* Sidebar */}
	   		<Sidebar />
      
      		{/* Rotas */}
			<Routes>
				<Route path='/' element={<OverviewPage />} />
				<Route path='/produtos' element={<ProductsPage />} />
				<Route path='/usuarios' element={<UsersPage />} />
				<Route path='/vendas' element={<SalesPage />} />
				<Route path='/pedidos' element={<OrdersPage />} />
				<Route path='/analises' element={<AnalyticsPage />} />
				<Route path='/definicoes' element={<SettingsPage />} />
				<Route path='/teste' element={Teste />} />
			</Routes>
		</div>
	);
}

export default App;
