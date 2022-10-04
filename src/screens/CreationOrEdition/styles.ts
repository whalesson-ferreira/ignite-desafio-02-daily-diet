import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Form = styled.ScrollView`
	flex: 1;
`

export const SelectTitle = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.TITLE.XS}px;
		color: ${theme.COLORS.GRAY_200};
	`}
`;

export const SelectContainer = styled.View`
	flex-direction: row;
	margin-top: 6px;
`;