import { Keypair } from '@kin-kinetic/keypair';
import { KineticSdk } from '@kin-kinetic/sdk';

window.onload = () => {
  const Buffer = require('buffer').Buffer;
  (window as any).Buffer = Buffer;
  (window as any).global = window;
  (window as any).global.Buffer = Buffer;

  document.dispatchEvent(
    new CustomEvent('kinetic-sdk-ready', {
      detail: {
        Keypair,
        KineticSdk,
      },
    })
  );
};
