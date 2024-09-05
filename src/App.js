import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="mx-auto flex flex-col gap-[48px] justify-center w-full h-full bg-[#F7F7F7]">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
