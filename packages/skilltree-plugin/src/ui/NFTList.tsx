import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PluginElementContext } from '@burner-wallet/types';
import SkilltreePlugin, { NFT } from '../SkilltreePlugin';

const Category = styled.h2`
  margin: 8px 0 4px;
  border-bottom: solid 1px #eee;
`;

const NFTCardList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

const NFTCardItem = styled.li`
  display: block;
  padding: 3px;
`;

const NFTCardLink = styled(Link)`
  height: 200px;
  width: 133px;
  background-size: cover;
  display: block;
`;

type NFTsByCategory = { [category: string]: NFT[] };

const NFTList: React.FC<PluginElementContext<SkilltreePlugin>> = ({ plugin, defaultAccount }) => {
  const [nfts, setNFTs] = useState<NFTsByCategory | null>(null);

  useEffect(() => {
    plugin.getNFTList(defaultAccount).then((_nfts: NFT[]) => {
      const nftsByCat: NFTsByCategory = {};
      for (const nft of _nfts) {
        nftsByCat[nft.category] = [...(nftsByCat[nft.category] || []), nft];
      }
      setNFTs(nftsByCat);
    });
  }, [defaultAccount]);

  if (!nfts) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      {Object.entries(nfts).map(([category, nftList]: [string, NFT[]]) => (
        <div key={category}>
          <Category>{category}s</Category>
          <NFTCardList>
            {nftList.map((nft: NFT) => (
              <NFTCardItem>
                <NFTCardLink
                  style={{ backgroundImage: `url('${nft.image}')` }}
                  to={`/card/${nft.id}`}
                />
              </NFTCardItem>
            ))}
          </NFTCardList>
        </div>
      ))}
    </div>
  );
};

export default NFTList;
