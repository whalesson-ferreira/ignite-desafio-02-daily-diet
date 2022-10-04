import styled, { css } from 'styled-components/native';

export const Container = styled.View`
	padding: 30px 24px 6px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	top: -32px;
	margin-bottom: -32px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	flex: 1;
	/* align-items: flex-start; */
	/* justify-content: space-between; */
`;
