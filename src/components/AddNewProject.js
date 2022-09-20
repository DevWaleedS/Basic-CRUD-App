import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewProject = () => {

  const navigate = useNavigate()
	const initialValues = {
		addTitle: '',
		addDescription: '',
		addPrice: '',
	};
	const [addProductDetails, setAddProductDetails] = useState(initialValues);

	const setProductHandle = (e) => {
		const { value, id } = e.target;
		setAddProductDetails({
			...addProductDetails,
			[id]: value,
		});
		console.log('title : ', addProductDetails.addTitle);
		console.log('description : ', addProductDetails.addDescription);
		console.log('price : ', addProductDetails.addPrice);
	};

	const addProductHandle = (e) => {
		e.preventDefault();

		fetch('http://localhost:4000/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({
				title: addProductDetails.addTitle,
				description: addProductDetails.addDescription,
				price: addProductDetails.addPrice,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				navigate('/products');
			})

			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-8 m-auto'>
					<form onSubmit={addProductHandle}>
						<div className='form-group mb-3'>
							<label htmlFor='addTitle'>Product Title</label>
							<input type='text' className='form-control' id='addTitle' placeholder='Enter Product Title' onChange={setProductHandle} value={addProductDetails.addTitle} />
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='addDescription'>Product Description</label>
							<input type='text' className='form-control' id='addDescription' placeholder='Enter Product Description' onChange={setProductHandle} value={addProductDetails.addDescription} />
						</div>
						<div className='form-group mb-3'>
							<label htmlFor='addPrice'>Product Price</label>
							<input type='text' className='form-control' id='addPrice' placeholder='Enter Product Price' onChange={setProductHandle} value={addProductDetails.addPrice} />
						</div>

						<button type='submit' className='btn btn-primary'>
							Add Product
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddNewProject;
