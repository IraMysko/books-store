
import Unemployed from './Unemployed';
import Employed from './Employed';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Path } from './constants';

const GetUsers = () => {

    return (
        <Router>
            <Switch>
                <Route path={Path.Unemployed} component={Unemployed} exact />
                <Route path={Path.Employed} component={Employed} exact />
                <Route path={Path.Main} component={Main} exact />
            </Switch>
        </Router>
    )
};

export default GetUsers;