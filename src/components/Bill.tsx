import React from 'react';
import styled from 'styled-components';

type BillProps = {
	itemsOrdered: number,
	totalPrice: number,
}

const Bill = ({ itemsOrdered, totalPrice }: BillProps) => {
	return (
		<BillContainer>
			<p>Your Bill</p>
			<Seperator />
			<p>Items Ordered : <span id="count">{itemsOrdered}</span></p>
			<p>Total Price : <span id="price">{totalPrice}</span> yen</p>
		</BillContainer>
	)
}

export default Bill;

const BillContainer = styled.div`
	width: 200px;
	height: 100px;
	background-color: #fff;
	box-shadow: 0 0 10px #ccc;
	border-radius: 5px;
	padding: 20px;
	p {
		margin: 0;
		font-size: 1.2rem;
	}
`;

const Seperator = styled.div`
	width: 100%;
	height: 1px;
	background-color: #000;
	margin: 10px 0;
`;