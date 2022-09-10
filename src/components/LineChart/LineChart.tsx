import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

type LineChartProps = {
  coinHistory: any | undefined;
  currentPrice: string;
  coinName: string;
};

const LineChart = ({ coinHistory, currentPrice, coinName }: LineChartProps) => {
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
            Current {coinHistory.name} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default LineChart;
