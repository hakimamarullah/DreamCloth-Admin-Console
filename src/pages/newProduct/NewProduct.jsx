import React from 'react';
import './newProduct.css';
const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h1 className='newProductTitle'>New Product</h1>
      <form className='newProductForm'>
        <div className='newProductFormItem'>
          <label>Product Name</label>
          <input
            type='text'
            className='newProductInput'
            placeholder='Kemeja Pria'
          />
        </div>
        <div className='newProductFormItem'>
          <label>Description</label>
          <input
            type='text'
            className='newProductInput description'
            placeholder='Kemeja Pria'
          />
        </div>
        <div className='newProductFormItem'>
          <label>Categories</label>
          <input type='text' className='newProductInput' placeholder='Women' />
        </div>
        <div className='newProductFormItem'>
          <label>Size</label>
          <input
            type='text'
            className='newProductInput'
            placeholder='size: coma separated value'
          />
        </div>
        <div className='newProductFormItem'>
          <label>Color</label>
          <input
            type='text'
            className='newProductInput'
            placeholder='color: coma separated value'
          />
        </div>
        <div className='newProductFormItem'>
          <label>Price</label>
          <input
            type='text'
            className='newProductInput'
            placeholder='price'
            min={0}
          />
        </div>
        <div className='newProductFormItem'>
          <label>Stock</label>
          <input
            type='number'
            className='newProductInput stok'
            placeholder='stok'
            min={0}
          />
        </div>
        <div className='newProductFormItem'>
          <label>Image</label>
          <input type='file' id='file' className='newProductInput' />
        </div>
        <div className='newProductButtonContainer'>
          <button className='newProductAddBtn'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
