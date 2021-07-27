import './css/Frausto.App.css';
import Routes from './Routes';
import { HashRouter as Router } from 'react-router-dom'


export default function FraustoApp() {

    return (
        <div className='FraustoApp'>
            <Router>
                <Routes />
            </Router>
        </div>
    )
}