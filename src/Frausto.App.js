import './css/Frausto.App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom'


export default function FraustoApp({ basename }) {

    return (
        <div className='FraustoApp'>
            <Router basename={basename}>
                <Routes />
            </Router>
        </div>
    )
}