import logo from './logo.svg';
import './App.css';
import ScheduleTab from './components/ScheduleTab';
import HeaderComponent from './components/HeaderComponent';
import '../src/index.css';

function App() {
  return (
    <div>
          <HeaderComponent />
          <div className = "container">
              <ScheduleTab />
          </div>
    </div>
  );
}
export default App;
