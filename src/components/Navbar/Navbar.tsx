import { Button, Menu, Typography, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from '@ant-design/icons';

import icon from '../../assets/images/cryptocurrency.png';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    screenSize < 798 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize]);

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <NavLink to="/">Home</NavLink>
    },
    {
      key: 'crypto',
      icon: <FundOutlined />,
      label: <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
    },
    {
      key: 'exchanges',
      icon: <MoneyCollectOutlined />,
      label: <NavLink to="/exchanges">Exchanges</NavLink>
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: <NavLink to="/news">News</NavLink>
    }
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={2} className="logo">
            <NavLink to="/">Cryptoverse</NavLink>
          </Typography.Title>
          <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && <Menu theme="dark" items={menuItems} />}
      </div>
    </header>
  );
};

export default Navbar;
