import React from 'react';
import './sidebar.css';
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
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem'>
              <PermIdentity className='sidebarIcon' />
              Users
            </li>
            <li className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoney className='sidebarIcon' />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem'>
              <MailOutlined className='sidebarIcon' />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutlined className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarListMenu'>
            <li className='sidebarListItem'>
              <WorkOutlined className='sidebarIcon' />
              Manage
            </li>
            <li className='sidebarListItem'>
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className='sidebarListItem'>
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
