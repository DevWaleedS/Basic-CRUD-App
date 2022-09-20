import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewProject from './components/AddNewProject';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<div className='row'>
				<div className='col-2'>
					<Sidebar className='sidebar' />
				</div>
				<div className='col-10'>
					<Routes>
						<Route path='/' element={<Home />} />

						<Route path='products' element={<Outlet />}>
							<Route path='' element={<Products />} />
							<Route path='add-project' element={<AddNewProject />} />
							<Route path=':productsId' element={<ProductDetails />} />
						</Route>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
