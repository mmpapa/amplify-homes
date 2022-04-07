import './App.css';
import { HomeCollection, NavBar, MarketingFooter } from './ui-components'
import '@aws-amplify/ui-react/styles.css';


function App() {
  return (
      <div className="App">
        <NavBar />
        <HomeCollection />
        <MarketingFooter />
      </div>
  );
}

export default App;
