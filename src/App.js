import './App.css';
import Footer from './components/footer/footer';
import Galery from './components/Gallery/Galery';
import GaleryText from './components/Gallery/GaleryText';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="mx-auto flex flex-col gap-[48px]  justify-center w-full h-full bg-[#F7F7F7]">
      <Header/>
      <Main/>
      <GaleryText/>
      <Galery/>
      <Footer/>
    </div>
  );
}

export default App;
