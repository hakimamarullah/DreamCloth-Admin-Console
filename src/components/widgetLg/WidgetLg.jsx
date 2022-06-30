import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest Transactions</h3>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgTdUser'>
            <img
              src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgUsername'>Nisdar Fazilla</span>
          </td>
          <td className='widgetLgTdDate'>30 Jun 2022</td>
          <td className='widgetLgTdAmount'>Rp200.000</td>
          <td className='widgetLgTdButton'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgTdUser'>
            <img
              src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgUsername'>Nisdar Fazilla</span>
          </td>
          <td className='widgetLgTdDate'>30 Jun 2022</td>
          <td className='widgetLgTdAmount'>Rp200.000</td>
          <td className='widgetLgTdButton'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgTdUser'>
            <img
              src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgUsername'>Nisdar Fazilla</span>
          </td>
          <td className='widgetLgTdDate'>30 Jun 2022</td>
          <td className='widgetLgTdAmount'>Rp200.000</td>
          <td className='widgetLgTdButton'>
            <Button type='Pending' />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
