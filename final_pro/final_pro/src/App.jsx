

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Model19formF from './fixed/Model19formF';

const App = () => {
    return (
        <Router>
            <div>
                <h1>My React App</h1>
                <Switch>
                 <Route exact path="/model" component={Model19formF} />
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App;

