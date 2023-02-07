import AboutGame from '../about-game';
import AboutZone from '../about-zone';
import Editions from '../editions';
import Header from '../header';
import Hero from '../hero';
import PrevGames from '../prev-games';
import SystemRequirements from '../system-requirements';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutGame />
      <AboutZone />
      <Editions />
      <SystemRequirements />
      <PrevGames />
    </>
  );
}

export default HomePage;
