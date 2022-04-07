import './App.css';
import { HomeCollection, NavBar, MarketingFooter } from './ui-components'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <div className="App">
        <NavBar />
        <HomeCollection />
        <MarketingFooter />
        <button onClick={signOut}>Sign out</button>
      </div>
      )}
    </Authenticator>
  );
}

export default App;
