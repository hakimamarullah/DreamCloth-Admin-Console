import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutlined,
  DynamicFeed,
  ChatBubbleOutlined,
  ReportOutlined,
  WorkOutlined,
} from '@mui/icons-material';
import { useState } from 'react';

const Sidebar = () => {
  const [itemClicked, setItemClicked] = useState(
    document.getElementById('homeMenu')
  );
  const handleClickMenu = (event) => {
    itemClicked?.classList.remove('active');
    event.target.classList.add('active');
    setItemClicked(event.target);
  };

  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarListMenu'>
            <Link to='/' className='link'>
              <li
                id='homeMenu'
                className={
                  itemClicked === document.getElementById('homeMenu')
                    ? 'sidebarListItem active'
                    : 'sidebarListItem'
                }
                onClick={(e) => handleClickMenu(e)}
              >
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarListMenu'>
            <Link to='/users' className='link'>
              <li
                className='sidebarListItem'
                onClick={(e) => handleClickMenu(e)}
              >
                <PermIdentity className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to='/products' className='link'>
              <li
                className='sidebarListItem'
                onClick={(e) => handleClickMenu(e)}
              >
                <Storefront className='sidebarIcon' />
                Products
              </li>
            </Link>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <MailOutlined className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <ChatBubbleOutlined className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <WorkOutlined className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem' onClick={(e) => handleClickMenu(e)}>
              <ReportOutlined className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
