import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material';
import { userRows } from '../../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);
  const userCell = (params) => {
    return (
      <div className='userListUser'>
        <img src={params.row.avatar} alt='' className='userListImg' />
        {params.row.username}
      </div>
    );
  };

  const handleDelete = (id)=>{
    setData(data.filter(item => item.id !== id));
  }
  const actionCell = (params) => {
    return (
      <>
        <Link to={'/user/'+params.row.id}>
          <button className='userListEdit'>Edit</button>
        </Link>

        <DeleteOutlined className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
      </>
    );
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 150, renderCell: userCell },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transactions',
      headerName: 'Transactions',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: actionCell,
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
