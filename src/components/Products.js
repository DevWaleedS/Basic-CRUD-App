import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

const Products = () => {
	const [products, setProducts] = useState([]);

	async function getAllProducts() {
		const response = await fetch('http://localhost:4000/products');
		const data = await response.json();
		setProducts(data);
	}

	useEffect(() => {
		getAllProducts();
	}, []);

	const DeleteHandle = (product) => {
		Swal.fire({
			title: `Are you sure to delete ${product.title}?`,
			icon: 'warning',
			showCloseButton: true,
			showCancelButton: true,
		}).then((data) => {
			if (data.isConfirmed) {
				async function DeleteData() {
					const response = await fetch(`http://localhost:4000/products/${product.id}`, {
						method: 'DELETE',
					});
					const data = await response.json();
					console.log(data);
					getAllProducts();
				}
				DeleteData().then(() => {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'the product has been deleted',
						showConfirmButton: false,
						timer: 1500,
					});
				});
			}
		});
	};

	const productData = products.map((product) => (
		<tr key={product.id}>
			<th scope='row'>{product.id}</th>
			<td>{product.title}</td>
			<td>{product.description}...</td>
			<td>{product.price}</td>
			<td className='operation'>
				<Link
					to=''
					className='btn btn-sm btn-danger'
					onClick={() => {
						DeleteHandle(product);
					}}
				>
					Delete
				</Link>
				<Link to={`/products/${product.id}`} className='btn btn-sm btn-primary'>
					View
				</Link>
				<Link to='' className='btn btn-sm btn-info'>
					Edit
				</Link>
			</td>
		</tr>
	));

	return (
		<div className='container'>
			<div className='page-title mb-5'>
				<h2 className='mb-5'> Product Page</h2>
				<Link to='add-project' className='btn btn-secondary'>
					Add New Product
				</Link>
				<Outlet />
			</div>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>Title</th>
						<th scope='col'>Description</th>
						<th scope='col'>Price</th>
						<th scope='col'>operations</th>
					</tr>
				</thead>
				<tbody>{productData}</tbody>
			</table>
		</div>
	);
};

export default Products;
