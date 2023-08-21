import React from 'react';
import { Header } from './layouts/Header';
import { Homepage } from './pages/Homepage';
import { Loading } from './components/Loading';
import { Footer } from './layouts/Footer';
import { ReturnButton } from './layouts/ReturnButton';
import { HomepageRefProvider } from './hooks/useHomepageRef';

const App = (): JSX.Element => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <React.Fragment>
      <HomepageRefProvider>
        {(loading && <Loading home />) || (
          <>
            <Header />
            <Homepage />
            <Footer />
            <ReturnButton />
          </>
        )}
      </HomepageRefProvider>
    </React.Fragment>
  );
};

export default App;
