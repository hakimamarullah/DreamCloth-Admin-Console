import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='nisdarfazilla'
          />
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='Nisdar Fazilla'
          />
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input
            type='email'
            className='newUserInput'
            placeholder='example@gmail.com'
          />
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='+62 852xxxxxxx'
          />
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input
            type='password'
            className='newUserInput'
            placeholder='password'
          />
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input
            type='text'
            className='newUserInput'
            placeholder='California, USA'
          />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
                <input type="radio" id='male' value='male' />
                <label for="male">Male</label>
                <input type="radio" id='female' value='female' />
                <label for="female">Female</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select id="active" name='active' className="newUserActive">
                <option value='yes'>Yes</option>
                <option value='no'>No</option>
            </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
