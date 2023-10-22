import Header from 'src/components/header/Header';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Presentation from './components/presentation/Presentation';

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <main className='main'>
        <Breadcrumb />
        <Presentation />
      </main>
      <Footer />
    </>
  )
}

export default App
