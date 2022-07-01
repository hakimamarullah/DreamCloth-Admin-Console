import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../data';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} dataKey='Sales' title='Sale Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTopRight'>
            <img
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='productInfoImg'
            />
            <span className='productInfoName'>Apple Airpods</span>
          </div>
          <div className='productInfoBottomRight'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>ID:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Sales:</span>
              <span className='productInfoValue'>6123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>Active:</span>
              <span className='productInfoValue'>Yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>In Stock:</span>
              <span className='productInfoValue'>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input
              type='text'
              className='productInput'
              placeholder='Apple Airpods'
            />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option>Yes</option>
              <option>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
                className='productUploadImg'
              />
              <label for='file'>
                <Publish className='productUploadIcon'/>
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className="productUpdateBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
