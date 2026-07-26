import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import NearbyEvents from './components/NearbyEvents/NearbyEvents';
import OnlineEvents from './components/OnlineEvents/OnlineEvents';
import MembershipCTA from './components/MembershipCTA/MembershipCTA';
import Categories from './components/Categories/Categories';
import PopularCities from './components/PopularCities/PopularCities';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CommunityStories from './components/CommunityStories/CommunityStories';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NearbyEvents />
        <OnlineEvents />
        <MembershipCTA />
        <Categories />
        <PopularCities />
        <HowItWorks />
        <CommunityStories />
      </main>
      <Footer />
    </>
  );
}

export default App;
