import React from 'react';
import { useBurner, DataProviders } from '@burner-wallet/ui-core';
import styled from 'styled-components';

import Page from '../../components/Page';
import { SCAN_QR_DATAURI } from '../../lib';


const BottomActionsContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
`;

const ScanButton = styled.button`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 20;
  outline: none;
  margin: -12px 0;

  background-image: url("${SCAN_QR_DATAURI}");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
`;

const { PluginElements, PluginButtons } = DataProviders;

const HomePage: React.FC = () => {
  const { defaultAccount, actions, pluginData, t } = useBurner();

  return (
    <Page>
      <PluginElements position='home-top' />
      <PluginElements position='home-middle' />

      <BottomActionsContainer>
        <ScanButton onClick={actions.openDefaultQRScanner} />
      </BottomActionsContainer>
    </Page>
  );
};

export default HomePage;
