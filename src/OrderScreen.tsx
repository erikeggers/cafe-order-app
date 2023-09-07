import React from 'react';
import styled from 'styled-components';

const OrderScreen = () => {
	return (
		<OrderScreenContainer>
			<h1>Order Screen</h1>
		</OrderScreenContainer>
	);
};

export default OrderScreen;

const OrderScreenContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;