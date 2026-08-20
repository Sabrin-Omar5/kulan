import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useConvexAuth } from 'convex/react';
import { DUMMYJSON_PRODUCTS_URL } from './api/dummyjson';
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

  const [productsStatus, setProductsStatus] = useState('loading');
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    if (isAuthenticated && view === 'auth') {
      setView('account');
    }
  }, [isAuthenticated, view]);

  useEffect(() => {
    fetch(DUMMYJSON_PRODUCTS_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setProductsStatus('success');
      })
      .catch((err) => {
        setProductsError(err.message);
        setProductsStatus('error');
      });
  }, []);

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

            <section className="section" id="products">
              <div className="container">
                <div className="section-head">
                  <h2 className="section-title">Products</h2>
                </div>

                {productsStatus === 'loading' && <p>Loading products…</p>}
                {productsStatus === 'error' && <p>Couldn't load products: {productsError}</p>}
                {productsStatus === 'success' && (
                  <ul>
                    {products.map((product) => (
                      <li key={product.id}>
                        <Link to={`/items/${product.id}`}>{product.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
