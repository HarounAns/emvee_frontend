import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Videos from './Pages/Videos';
import Teams from './Pages/Teams';
import Randomizer from './Pages/Randomizer';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Admin from './Pages/Admin';


function App() {
  return (
    <div className="App">
      <div className="ContentWrap">
        <Navbar />
        <Switch>
          <Route path="/" component={Videos} exact />
          <Route path="/admin" component={Admin} />
          <Route path="/teams" component={Teams} />
          <Route path="/randomizer" component={Randomizer} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
