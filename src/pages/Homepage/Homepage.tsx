import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Cryptocurrencies, News } from '../../pages';

type Coin = {
  uuid: string;
  symbol: string;
  name: string;
};

type Stats = {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
};

type Coins = {
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

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats: Stats = data?.data.stats;

  if (isFetching) return 'Loading....';

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats?.total} />
        </Col>

        <Col span={12}>
          {' '}
          <Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic
            title="Total Market Cap"
            value={millify(parseFloat(globalStats?.totalMarketCap))}
          />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic
            title="Total 24h Volume"
            value={millify(parseFloat(globalStats?.total24hVolume))}
          />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
