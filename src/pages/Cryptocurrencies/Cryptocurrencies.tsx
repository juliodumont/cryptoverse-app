import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useState } from 'react';
import { CoinInfo } from '../Homepage/Homepage';

type CryptocurrenciesProps = {
  simplified: boolean;
};

const Cryptocurrencies = ({ simplified }: CryptocurrenciesProps) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<CoinInfo[]>(cryptosList?.data?.coins);

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypt/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(parseFloat(currency.price))}</p>
                <p>Market Cap: {millify(parseFloat(currency.marketCap))}</p>
                <p>Daily Change: {millify(parseFloat(currency.change))}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
