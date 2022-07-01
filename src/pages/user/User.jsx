import './user.css';
import { Link } from 'react-router-dom';
import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Nisdar Fazilla</span>
              <span className='userShowTitle'>Journalist</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowBottomTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>nisdarfazilla</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>5 Aug 2001</span>
            </div>
            <span className='userShowBottomTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+62 852-9622-3972</span>
            </div>
            <div className='userShowInfo'>
              <MailOutlined className='userShowIcon' />
              <span className='userShowInfoTitle'>nisdarfazilla@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Aceh | Indonesia</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateFormLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='username'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='Full Name'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='example@gmail.com'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='+62 852xxxxxxx'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  className='userUpdateInput'
                  placeholder='Aceh | Indonesia'
                />
              </div>
            </div>
            <div className='userUpdateFormRight'>
              <div className='userUpload'>
                <img
                  src='https://www.chatnews.id/wp-content/production/uploads/2022/03/10123129/275165413_523153452886490_6227131912796860397_n-1.jpg'
                  alt=''
                  className='userUploadImg'
                />
                <label htmlFor='file'>
                  <Publish className='userUploadIcon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
