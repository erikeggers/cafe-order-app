import React from 'react';
import styled from 'styled-components';

type BillProps = {
	itemsOrdered: number,
	totalPrice: number,
}

const Bill = ({ itemsOrdered, totalPrice }: BillProps) => {
	return (
		<BillContainer>
			<span>Your Bill</span>
			<Seperator />
			<span id="count">Items Ordered : {itemsOrdered}</span>
			<span id="price">Total Price : {totalPrice} yen</span>
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
	span {
		marign: 0;
		display: block;
		font-size: 1.2rem;
	}
`;

const Seperator = styled.div`
	width: 100%;
	height: 1px;
	background-color: #000;
	margin: 10px 0;
`;