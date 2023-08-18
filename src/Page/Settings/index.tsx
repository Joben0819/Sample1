
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store/index';
import Firebase from '../../Component/Firebase';
// import { setName } from '../reducers/counter';
function Settings() {
  // const names = useSelector((state: RootState) => setName(state.name));

  // console.warn("mama",names)
  return (
    <div className='settings'>
      <div className='navbar1'>
        <Firebase/>
        <ul>
          <li>Shipment</li>
          <li>Gcash Wallet</li>
          <li>My Likes</li>
          <li>Create Post</li>
          <li>Account Setiings</li>
        </ul>
      </div>
      <div className='content'>s</div>
    </div>

  )
}

export default Settings