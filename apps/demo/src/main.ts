import { Keypair } from '@kin-kinetic/keypair';
import { KineticSdk } from '@kin-kinetic/sdk';

window.onload = () => {
  const Buffer = require('buffer').Buffer;
  (window as any).Buffer = Buffer;
  (window as any).global = window;
  (window as any).global.Buffer = Buffer;

  window['KineticSdk'] = KineticSdk;
  window['Keypair'] = Keypair;

  console.log(`const owner = Keypair.random();`);
  console.log(`const sdk = await KineticSdk.setup({
      endpoint: 'https://sandbox.kinetic.host',
      environment: 'devnet',
      index: 1,
      logger: console,
    });`);
  console.log(`const accountTx = await sdk.createAccount({ owner }) `);
};
