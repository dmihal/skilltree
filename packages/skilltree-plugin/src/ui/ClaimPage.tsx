import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PluginPageContext } from '@burner-wallet/types';
import { Asset } from '@burner-wallet/assets';
import SkilltreePlugin, { NFT } from '../SkilltreePlugin';

const Title = styled.h2`
`;

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
  const [status, setStatus] = useState<string>('claiming');
  const [nft, setNFT] = useState<NFT | null>(null);

  useEffect(() => {
    plugin.claimNFT(match.params.id).then(async (id: string | null) => {
      if (!id) {
        setStatus('error');
        return;
      }

      const _nft = await plugin.getNFT(id);
      setNFT(_nft);
      setStatus('success');
      if (!_nft) {
        actions.navigateTo('/');
      }
    });
  }, []);

  const { Page } = BurnerComponents;

  if (status === 'claiming') {
    return (
      <Page title="Loading..."> </Page>
    );
  }
  if (status === 'error' || !nft) {
    return (
      <Page title="Error claiming"> </Page>
    );
  }

  return (
    <Page title="Claimed successfully">
      <Title>{nft.title}</Title>
      <NFTCard style={{ backgroundImage: `url('${nft.image}')` }} />
      <div>{nft.category}</div>
      <div>{nft.description}</div>
    </Page>
  );
};

export default NFTPage;
