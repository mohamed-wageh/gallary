import '../Topbar/topbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import profileImg from '../../../assets/Profile.jpg';
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div>
                <h1>Donia Essam </h1>
            </div>
            <div className="topRight">
                <div className="topbarIconsContainer">
                <a  href="/dashboard/user/:userId">
                    <SettingsIcon/>
                    </a>
                </div>
                <Link to="/Profile">
                <img src={profileImg} alt="" className="topAvatar" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Topbar