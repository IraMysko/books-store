import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Contacts from './components/Contacts';
import Discount from './components/Discount';
import Catalogue from './components/Catalogue';
import NavBar from './components/NavBar';
import { Routes } from './constants';

const App: React.FC = () => {
    return (
        <div className='overall-container'>
            <Router>
                <NavBar />
                <Header />
                <Switch>
                    <Route path={Routes.Discount} component={Discount} />
                    <Route path={Routes.News} component={News} />
                    <Route path={Routes.Contacts} component={Contacts} />
                    <Route path={Routes.Catalogue} component={Catalogue} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App;