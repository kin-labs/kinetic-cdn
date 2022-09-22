// import { Keypair } from '@kin-kinetic/keypair';
// import { KineticSdk } from '@kin-kinetic/sdk';
//
// window.onload = () => {
//   window['kineticSdk'] = KineticSdk;
//   window['keypair'] = Keypair;
// };
//
// export class AppElement {
//   private sdk: KineticSdk;
//
//   constructor() {
//     console.log('AppElement constructor');
//     this.setupSdk();
//   }
//
//   setupSdk() {
//     KineticSdk.setup({
//       endpoint: 'https://sandbox.kinetic.host',
//       environment: 'devnet',
//       index: 1,
//       logger: console,
//     }).then((res) => (this.sdk = res));
//   }
// }
