export type Coin = {
  uuid: string;
  symbol: string;
  name: string;
};

export type Stats = {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
};

export type Coins = {
  coins: Coin[];
  stats: Stats;
};

export type CoinInfo = {
  '24hVolume': string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkline: string[];
  symbol: string;
  tier: number;
  uuid: string;
};
