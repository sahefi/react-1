import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Utama from './component/Utama';
import Navbar from './component/Navbar';
function App() {
  return (
    <div>
      {/* navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-light shadow-sm py-3  */}
            <Navbar/>
            <p><Utama/></p>
    </div>
  );
}

export default App;
