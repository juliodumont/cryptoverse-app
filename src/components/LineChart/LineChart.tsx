import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartOptions
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

import { Col, Row, Typography } from 'antd';
import Loader from '../Loader/Loader';
import { CoinHistory } from '../../types';

const { Title } = Typography;

type LineChartProps = {
  coinHistory?: CoinHistory;
  currentPrice?: string;
  coinName?: string;
};

const LineChart = ({ coinHistory, currentPrice, coinName }: LineChartProps) => {
  const coinPrice = [];
  const coinTimestamp = [];

  if (!coinHistory) return <Loader />;

  for (let index = 0; index < coinHistory?.data?.history?.length; index++) {
    coinPrice.push(coinHistory?.data?.history[index].price);
    coinTimestamp.push(new Date(coinHistory?.data?.history[index].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  };

  const options = {
    scale: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  } as ChartOptions;

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
