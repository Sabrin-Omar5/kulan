import { useEffect, useState } from 'react';
import { useConvexAuth } from 'convex/react';
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
import AuthForm from './components/Auth/AuthForm';
import AccountPage from './components/Account/AccountPage';

function App() {
  const { isAuthenticated } = useConvexAuth();
  const [view, setView] = useState('home');
  const [authMode, setAuthMode] = useState('signup');

  useEffect(() => {
    if (isAuthenticated && view === 'auth') {
      setView('account');
    }
  }, [isAuthenticated, view]);

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLoginClick={() => {
          setAuthMode('login');
          setView('auth');
        }}
        onSignupClick={() => {
          setAuthMode('signup');
          setView('auth');
        }}
        onAccountClick={() => setView('account')}
      />
      <main>
        {view === 'account' && isAuthenticated ? (
          <AccountPage onLoggedOut={() => setView('home')} />
        ) : view === 'auth' && !isAuthenticated ? (
          <AuthForm initialMode={authMode} onDone={() => setView('account')} />
        ) : (
          <>
            <Hero />
            <NearbyEvents />
            <OnlineEvents />
            <MembershipCTA />
            <Categories />
            <PopularCities />
            <HowItWorks />
            <CommunityStories />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
