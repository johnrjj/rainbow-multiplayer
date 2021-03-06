import styled from 'styled-components';
import { withThemeContext } from '../../context/ThemeContext';
import { position } from '@rainbow-me/styles';

const InnerBorder = styled.View.withConfig({
  shouldForwardProp: prop => prop !== 'width',
}).attrs({ pointerEvents: 'none' })`
  ${position.cover};
  border-color: ${({ color, colors }) => color || colors.black};
  border-radius: ${({ radius }) => radius || 0};
  border-width: ${({ width }) => width || 0.5};
  opacity: ${({ opacity, isDarkMode }) => (isDarkMode ? 0 : opacity || 0.06)};
`;

export default withThemeContext(InnerBorder);
