import {LOGO_URL} from './config';
function Header(){
  return(
      <div className="d-flex justify-content-around">
          <div className='container'>
            <img src={LOGO_URL} style={{width:200}}/>
          </div>
          <div className='navbar'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
      </div>
  )
}
export default Header;