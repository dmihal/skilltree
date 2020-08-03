# Advanced Burner Wallet 2 Project

This repo provides a boilerplate for building a project using the Burner Wallet 2.

Work in progress!

## Setup

1. Clone the repo
2. Run `yarn install`. This repo uses Lerna and Yarn Workspaces, so `yarn install` will install
  all dependencies and link modules in the repo
3. To connect to mainnet & most testnets, you'll need to provide an Infura key. Create a file
  named `.env` in the `basic-wallet` folder and set the contents to `REACT_APP_INFURA_KEY=<your key from infura.com>`
4. Run `yarn start-local` to start the wallet while connected to Ganache, or run `yarn start-basic`
  to start the wallet connected to Mainnet & xDai

