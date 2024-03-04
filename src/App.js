import './App.css';
import './styles/bootstrap-5.3.3-dist/css/bootstrap.min.css';
import UsersList from './UsersList';
import logo from './photos/Logo.svg';
import { searchOutline, homeOutline, folderOpenOutline, pieChartOutline, peopleOutline, chatbubblesOutline, settingsOutline  } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const App = () => {
  return (
      <div className="App">
        <nav id="navbar">
          <ul className="navbar-items flexbox-col">
            <li className="navbar-logo flexbox-left">
              <a className="navbar-item-inner flexbox height-100">
                <img className="height-100" src={logo} alt="OurLogo"></img>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={searchOutline}></IonIcon>
                </div>
                <span className="link-text">Search</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={homeOutline}></IonIcon>
                </div>
                <span className="link-text">Home</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={folderOpenOutline}></IonIcon>
                </div>
                <span className="link-text">Projects</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={pieChartOutline}></IonIcon>
                </div>
                <span className="link-text">Dashboard</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={peopleOutline}></IonIcon>
                </div>
                <span className="link-text">Team</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={chatbubblesOutline}></IonIcon>
                </div>
                <span className="link-text">Support</span>
              </a>
            </li>
            <li className="navbar-item flexbox-left">
              <a className="navbar-item-inner flexbox-left">
                <div className="navbar-item-inner-icon-wrapper flexbox">
                  <IonIcon icon={settingsOutline}></IonIcon>
                </div>
                <span className="link-text">Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        <main id="main" className="flexbox-col">
          <h2>Lorem ipsum!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corporis,
            rerum doloremque iste sed voluptates omnis molestias molestiae animi
            recusandae labore sit amet delectus ad necessitatibus laudantium qui!
            Magni quisquam illum quaerat necessitatibus sint quibusdam perferendis!
            Aut ipsam cumque deleniti error perspiciatis iusto accusamus consequuntur
            assumenda. Obcaecati minima sed natus?
          </p>
          <div>
            <UsersList/>
          </div>
        </main>
      </div>
  );
};

export default App;
