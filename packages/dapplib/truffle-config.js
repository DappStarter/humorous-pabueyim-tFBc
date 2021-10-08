require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind around give private furnace spoon'; 
let testAccounts = [
"0xf930a84ba4bd060f25b1c1e3c675255c5b878098b8d2b11905771d454c6069d4",
"0x0579087d3357bfcde9bac5ce0bf550aed70b04fe58891171fd182742f6b27fd2",
"0x1d3d705c6f8511c00521f70d4625cbc3f11cdc8c87974a43f39f00359a3f41c2",
"0x5b05d954558ed462c86c81b7e988ac1aad09b119fffd16a34469b00f674838d8",
"0xc60cccba1a7fe3f6b2b283819bc821823708b008a9ab647e663e9899ac454811",
"0x5973ec59c12be14b0ad4283a719b1413bcedb849a0a7d4197af5f5256da20503",
"0xeb494815e647da78a892819f6560defbb004e2386e272d6b8a3f76cf207f4c07",
"0x8fc571e0c5fe86d067d8537a346e766b91ddff009090b92e03ecd4ed2a235903",
"0x9f77b1dd8270407ca2ab556b3b4a8e7a0a08260e76398e7f54dc275a2132c7c4",
"0x3b937b7f74d260fcd22810ca48d040775eeadd450a7a2dd52e1380fbb9532463"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

