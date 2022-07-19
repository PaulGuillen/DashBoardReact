import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                </ul>
                <ul>
                <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <StoreIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span
                    ></li>
                </ul>
                <ul>
                    <li>
                        <DeliveryDiningIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                </ul>

                <ul>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                </ul>
                <ul>
                    <li>
                        <FilterDramaIcon className="icon"/>
                        <span>System Health</span>
                     </li>
                </ul>
                <ul>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                </ul>

                <ul>
                    <li>
                        <FaceIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>LogOut</span>
                    </li>
                </ul>

            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar