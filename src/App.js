
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App  h-screen overflow-y-scroll scrollbar-hide px-6 overflow-x-hidden">
<Header/>
<div className='flex items-start justify-start w-full space-x-2'>
  <Navbar/>
</div>
    </div>
  );
}

export default App;
