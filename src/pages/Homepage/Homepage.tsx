import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;
import { useGetCryptosQuery } from '../../services/cryptoApi';

type CoinInfo = {
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
  coins: CoinInfo[];
  stats: Stats;
};

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery({});
  const globalStats: Stats = data?.data.stats;
  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>

        <Col span={12}>
          {' '}
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic
            title="Total Market Cap"
            value={millify(parseFloat(globalStats.totalMarketCap))}
          />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic
            title="Total 24h Volume"
            value={millify(parseFloat(globalStats.total24hVolume))}
          />
        </Col>
        <Col span={12}>
          {' '}
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
