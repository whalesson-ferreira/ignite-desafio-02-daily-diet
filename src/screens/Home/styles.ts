import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
	flex: 1;
	padding: 24px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.BODY.MD}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_100}
	`};
	margin-top: 24px;
	margin-bottom: 6px;
`;

export const ListDate = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.TITLE.SM}px;
		color: ${theme.COLORS.GRAY_100};
	`};
	margin-top: 20px;
	margin-bottom: 6px;
`;