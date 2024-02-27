import {
  BlockExplorer,
  NetworkType,
} from "@mavrykdynamics/beacon-sdk";

export function openTzktContract(network, contract) {
  window.open(`https://${network === 'mainnet' ? '' : `${network}.`}tzkt.io/${contract.address}`, '_blank');
}


export function openTzktOPG(network, hash) {
  window.open(`https://${network}.tzkt.io/${hash}`, '_blank');
}


export default class TZKTBlockExplorer extends BlockExplorer {
  constructor() {
    const rpcUrls = {
      [NetworkType.MAINNET]: "https://tzkt.io",
      [NetworkType.DELPHINET]: "https://delphinet.tzkt.io",
      [NetworkType.EDONET]: "https://edonet.tzkt.io",
      [NetworkType.FLORENCENET]: "https://florencenet.tzkt.io",
      [NetworkType.GRANADANET]: "https://granadanet.tzkt.io",
      [NetworkType.HANGZHOUNET]: "https://hangzhounet.tzkt.io",
      [NetworkType.ITHACANET]: "https://ithacanet.tzkt.io",
      [NetworkType.JAKARTANET]: "https://jakartanet.tzkt.io",
      [NetworkType.GHOSTNET]: "https://ghostnet.tzkt.io",
      // [NetworkType.LIMANET]: "https://limanet.tzkt.io",
      [NetworkType.CUSTOM]: "https://tzkt.io",
    };
    super(rpcUrls);
    this.rpcUrls = rpcUrls;
  }

  async getAddressLink(address, network) {
    const blockExplorer = await this.getLinkForNetwork(network);
    return `${blockExplorer}/${address}`;
  }

  async getTransactionLink(transactionId, network) {
    const blockExplorer = await this.getLinkForNetwork(network);
    return `${blockExplorer}/${transactionId}`;
  }
}