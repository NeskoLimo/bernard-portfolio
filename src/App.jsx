// src/App.jsx
import Navbar from './components/Navbar';
import Home   from './components/Home';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
