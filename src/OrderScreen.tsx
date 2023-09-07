import React, {useState} from 'react';
import ItemButton from './components/ItemButton';
import styled from 'styled-components';

const OrderScreen = () => {
	const [itemsOrdered, setItemsOrdered] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	// Add the item to the order and update the total price
	const addToOrder = (itemName: string, itemPrice: number) => {
		setItemsOrdered(itemsOrdered + 1);
		setTotalPrice(totalPrice + itemPrice);
	}

	return (
		<>
			<OrderScreenContainer>
				<h1>Order Screen</h1>
				<MenuAndBillContainer>
					<div>
						<ItemButton itemName="coffee" itemPrice={480} addToOrder={addToOrder} />
						<ItemButton itemName="tea" itemPrice={280} addToOrder={addToOrder} />
						<ItemButton itemName="milk" itemPrice={180} addToOrder={addToOrder} />
						<ItemButton itemName="coke" itemPrice={190} addToOrder={addToOrder} />
						<ItemButton itemName="beer" itemPrice={580} addToOrder={addToOrder} />
					</div>
				</MenuAndBillContainer>
			</OrderScreenContainer>
		</>
	)
}

export default OrderScreen;

const OrderScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MenuAndBillContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 560px;
	margin-top: 30px;
`;