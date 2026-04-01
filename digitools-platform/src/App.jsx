import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Navbar'
import HeroBanner from './Banner'
import StatsSection from './Stats-section';

function App() {

  return (
    <>
    {/* Navbar */}
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
    <StatsSection></StatsSection>

    </>
  )
}

export default App
