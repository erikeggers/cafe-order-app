import React, {useState} from 'react';
import styled from 'styled-components';

type ItemButtonProps = {
	itemName: string,
	itemPrice: number,
	addToOrder: (itemName: string, itemPrice: number, itemCount: number) => void
}

const ItemButton = ({ itemName, itemPrice, addToOrder }: ItemButtonProps) => {
	const [itemCount, setItemCount] = useState(0);
	const upperCaseItemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);

	// Update the item count and add the item to the order
	const updateCountAndAddToOrder = () => {
		setItemCount(itemCount + 1);
		addToOrder(itemName, itemPrice, itemCount);
	}

	return (
		<ItemButtonContainer>
			<StyledItemButton id={itemName} onClick={() => updateCountAndAddToOrder()}>
				<span>{upperCaseItemName}</span>
				<span>{itemPrice} yen</span>
			</StyledItemButton>
			<ItemCount id={`${itemName}-count`}>{itemCount}</ItemCount>
		</ItemButtonContainer>
	)
}

export default ItemButton;

const ItemButtonContainer = styled.div`
	position: relative;
`;

const StyledItemButton = styled.button`
	width: 200px;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	border: 2px solid #000;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 0px 0px 30px 0px;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;
	box-shadow: 0 8px 8px #ccc;
	transition: all 0.2s ease-in-out;
	&:active {
		box-shadow: none;
	}
`;

const ItemCount = styled.div`
	position: absolute;
	top: -10px;
	right: -10px;
	background-color: #E24E40;
	color: #fff;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
`;
