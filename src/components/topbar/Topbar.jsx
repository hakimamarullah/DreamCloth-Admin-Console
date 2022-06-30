import React from 'react';
import './topbar.css';
import { NotificationsNone, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>DC| Admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIcon'>
            <NotificationsNone/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className='topbarIcon'>
            <Settings/>
          </div>
          <img src="https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg" alt="" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
