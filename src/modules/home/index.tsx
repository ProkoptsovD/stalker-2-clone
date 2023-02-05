import AboutGame from '../about-game';
import AboutZone from '../about-zone';
import Editions from '../editions';
import Header from '../header';
import Hero from '../hero';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutGame />
      <AboutZone />
      <Editions />
    </>
  );
}

export default HomePage;
