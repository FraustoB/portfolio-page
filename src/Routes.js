import Portfolio from './Portfolio';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './css/Routes.css';

export default function Routes() {
    return (
        <div className='Routes'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Intro} />
                    <Navbar >
                        <Route exact path='/projects' component={Portfolio} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                    </Navbar>
                </Switch>
            </Router>
        </div>
    )
}