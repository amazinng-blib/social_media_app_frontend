import './App.css';
import Auth from './pages/Auth/Auth';
import HomePage from './pages/HomePage/HomePage';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-12rem' }}></div>
      {/* <HomePage /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
