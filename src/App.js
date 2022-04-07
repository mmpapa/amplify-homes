import './App.css';
import { HomeCollection, NavBar, MarketingFooter } from './ui-components'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      {({ signOut, user }) => (
      <div className="App">
        <NavBar />
        <HomeCollection />
        <MarketingFooter />
        <button style={styles.button} onClick={signOut}>Sign out</button>
      </div>
      )}
    </Authenticator>
  );
}
const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App;
