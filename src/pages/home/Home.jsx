import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo';
import './home.css';
import { data } from '../../data';
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart title='User Analytics' data={data} dataKey='Active User'/>
    </div>
  );
};

export default Home;
