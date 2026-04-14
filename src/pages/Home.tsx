import Hero from '../components/Hero';
import ImpactStats from '../components/ImpactStats';
import Achievements from '../components/Achievements';
import ProjectGallery from '../components/ProjectGallery';
import Footer from '../components/Footer';
import WelcomeModal from '../components/WelcomeModal';

const Home = () => {
  return (
    <>
      <WelcomeModal />
      <Hero />
      <ImpactStats />
      <Achievements />
      <ProjectGallery />
      <Footer />
    </>
  );
};

export default Home;
