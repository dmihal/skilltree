import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PluginPageContext } from '@burner-wallet/types';
import { Asset } from '@burner-wallet/assets';
import SkilltreePlugin, { NFT } from '../SkilltreePlugin';

const NFTCard = styled.div`
  height: 200px;
  width: 133px;
  background-size: cover;
  display: block;
  margin: 4px;
`;

const NFTPage: React.FC<PluginPageContext<{ id: string }, SkilltreePlugin>> = ({
  BurnerComponents, defaultAccount, match, plugin, actions
}) => {
  const [nft, setNFT] = useState<NFT | null>(null);

  useEffect(() => {
    plugin.getNFT(match.params.id).then((nft: NFT | null) => {
      setNFT(nft);
      if (!nft) {
        actions.navigateTo('/');
      }
    });
  });

  const { Page } = BurnerComponents;

  if (!nft) {
    return (
      <Page title="Loading..."> </Page>
    );
  }

  return (
    <Page title={nft.title}>
      <NFTCard style={{ backgroundImage: `url('${nft.image}')` }} />
      <div>{nft.category}</div>
      <div>{nft.description}</div>
    </Page>
  );
};

export default NFTPage;
