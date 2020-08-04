import React from 'react';
import _styled, { ThemedStyledInterface } from 'styled-components';
import { BurnerTheme } from '../Template';

const styled = (_styled as ThemedStyledInterface<BurnerTheme>);

const HeaderElement = styled.header`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  margin: 0 ${props => props.theme.pageMargin};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;


const Header: React.FC = () => (
  <HeaderElement>
    <TitleContainer>
      <Title>Skilltree</Title>
    </TitleContainer>
  </HeaderElement>
);


export default Header;
