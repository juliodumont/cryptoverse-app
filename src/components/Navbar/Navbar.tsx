import { Button, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from '@ant-design/icons';

import icon from '../../assets/images/cryptocurrency.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <NavLink to="/">Cryptoverse</NavLink>
          </Typography.Title>
          <Button className="menu-control-container"></Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
