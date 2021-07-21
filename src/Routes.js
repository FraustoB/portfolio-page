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
                    <Route exact path='/' render={Intro} />
                    <Navbar >
                        <Route exact path='/portfolio' render={Portfolio} />
                        <Route exact path='/about' render={About} />
                        <Route exact path='/contact' render={Contact} />
                    </Navbar>

                </Switch>
            </Router>
        </div>
    )
}