import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
	const [product, setProduct] = useState();

	const { productsId } = useParams();

	// fetch data from json server
	async function fetchData() {
		const response = await fetch(`http://localhost:4000/products/${productsId}`);
		const data = await response.json();
		setProduct(data);
	}
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-11'>
					<h1 className=' text-dark '>ProductDetails #{productsId}</h1>
				</div>
				<div className='col-1'>
					<Link to='/products'>Back</Link>
				</div>
			</div>
			<hr />
			{product && (
				<div className='row'>
					<div className='col-3'>
						<h4>{product.title}</h4>
						<p className=' fw-bold'>{product.price}</p>
					</div>
					<div className='col-6'>
						<h6>{product.description}</h6>
					</div>
					<div className='col-3 text-end '>
						<img className=' img-fluid w-25 me-5' src={product.image} alt='' />
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
