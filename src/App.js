import logo from './logo.svg';
import './App.scss';
import Spline from '@splinetool/react-spline';


function App() {
  return (
  <div className='spline-container'>
    <div className='nav'>
      <ul>
        <li>Lova</li>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        </div> 
    <div className='spline'> <Spline
        scene="https://prod.spline.design/C8ivOptgnpunJOB0/scene.splinecode" 
      /></div>
     <div className='footer'>
      <p>
      Quench your thirst, the extraordinary way! Water for life, purity guaranteed. Refreshing drops for a rejuvenating experience. Drink the difference, sip by sip.
      </p>
      <button>Explore Products</button>
     </div>

  </div>
  );
}

export default App;
