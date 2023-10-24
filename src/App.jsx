import Header from 'src/components/header/Header';
import Breadcrumb from 'src/components/breadcrumb/Breadcrumb';
import Coverage from 'src/components/coverage/Coverage';
import Footer from 'src/components/footer/Footer';
import NavBar from 'src/components/navBar/NavBar';
import Presentation from 'src/components/presentation/Presentation';
import Packages from './components/packages/Packages';
import FibraSection from './components/fibra-section/FibraSection';
import StreamingSection from './components/streaming-section/StreamingSection';
import WifiSection from './components/wifi-section/WifiSection';
import ReferencesSection from './components/references-section/ReferencesSection';
import QuestionsSection from './components/questions-section/QuestionsSection';
import ConnectionSection from './components/cocnection-section/ConnectionSection';

function App() {

  return (
    <>
      <Header />
      <NavBar />
      <main className='main'>
        <Breadcrumb />
        <Presentation />
        <Coverage />
        <Packages />
        <div className="main-sections">
          <FibraSection />
          <StreamingSection />
          <WifiSection />
          <ReferencesSection />
          <ConnectionSection />
          <QuestionsSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
