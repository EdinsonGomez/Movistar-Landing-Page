import Header from 'src/components/header/Header';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <main className='main'>
        <Breadcrumb />
      </main>
      <Footer />
    </>
  )
}

export default App
