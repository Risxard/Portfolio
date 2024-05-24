import Footer from './components/Footer/Footer.tsx'
import Header from './components/Header/HeroSection/HeroSection.tsx';
import Navigation from './components/Header/Navigation/Navigation.tsx';
import Main from './components/Main/Main.tsx';

function App() {
  return (
    <>
      <Navigation/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
