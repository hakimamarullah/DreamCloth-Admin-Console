import './featuredInfo.css';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rp200.000</span>
          <span className='featuredMoneyRate'>
            -10
            <ArrowDropDown className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSubtitle'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rp2000.000</span>
          <span className='featuredMoneyRate'>
            -11
            <ArrowDropDown className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSubtitle'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>Rp200.000</span>
          <span className='featuredMoneyRate'>
            +20
            <ArrowDropUp className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSubtitle'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
