import Portfolio from './Portfolio';
import Intro from './Intro';
import About from './About';
import Contact from './Contact';
import {

    Switch,
    Route,
} from 'react-router-dom';
import './css/Routes.css';

export default function Routes() {
    return (
        <div className='Routes'>

            <Switch>
                <Route exact path='portfolio-page/' component={Intro} />
                <Route exact path='portfolio-page/projects' component={Portfolio} />
                <Route exact path='portfolio-page/about' component={About} />
                <Route exact path='portfolio-page/contact' component={Contact} />
                <Route path='*' component={Intro} />
            </Switch>

        </div>
    )
}