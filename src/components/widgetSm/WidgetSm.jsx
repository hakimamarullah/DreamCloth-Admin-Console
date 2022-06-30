import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css';

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img
            src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
            alt=''
            className='widgetSmPic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Hakim Amarullah</span>
            <span className='widgetSmUserTitle'>Backend Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon' />
            View
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
            alt=''
            className='widgetSmPic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Steve Rogers</span>
            <span className='widgetSmUserTitle'>Backend Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon' />
            View
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
            alt=''
            className='widgetSmPic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Tony Stark</span>
            <span className='widgetSmUserTitle'>Backend Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon' />
            View
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
            alt=''
            className='widgetSmPic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Dr. Strange</span>
            <span className='widgetSmUserTitle'>Backend Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon' />
            View
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img
            src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
            alt=''
            className='widgetSmPic'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Nisdar Fazilla</span>
            <span className='widgetSmUserTitle'>Backend Engineer</span>
          </div>
          <button className='widgetSmBtn'>
            <Visibility className='widgetSmIcon' />
            View
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
