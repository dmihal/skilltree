import React from 'react';
import ReactDOM from 'react-dom';
import { xdai } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, } from '@burner-wallet/core/gateways';
import SkilltreeUI from 'skilltree-ui';
import SkilltreePlugin from 'skilltree-plugin';

const core = new BurnerCore({
  signers: [new LocalSigner()],
  gateways: [
    new XDaiGateway(),
  ],
  assets: [xdai],
});

const BurnerWallet = () =>
  <SkilltreeUI
    core={core}
    plugins={[new SkilltreePlugin()]}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
