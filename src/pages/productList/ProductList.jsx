import React from 'react';
import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@mui/icons-material';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDeleteProduct = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const productCell = (params) => {
    return (
      <div className='productListProduct'>
        <img src={params.row.img} alt='' className='productListImg' />
        {params.row.name}
      </div>
    );
  };

  const productAction = (params) => {
    return (
      <>
        <Link to={'/product/' + params.row.id}>
          <button className='productListEditBtn'>Edit</button>
        </Link>
        <DeleteOutlined
          className='productListDelete'
          onClick={() => handleDeleteProduct(params.row.id)}
        />
      </>
    );
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 250, renderCell: productCell },
    { field: 'stock', headerName: 'Stock', width: 70 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: productAction,
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        rowHeight={60}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
