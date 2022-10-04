import { Keypair } from '@kin-kinetic/keypair';
import { KineticSdk } from '@kin-kinetic/sdk';

window.onload = () => {
  document.dispatchEvent(
    new CustomEvent('kinetic-sdk-ready', {
      detail: {
        Keypair,
        KineticSdk,
      },
    })
  );
};
