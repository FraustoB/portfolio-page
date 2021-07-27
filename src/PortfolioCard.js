
import './css/PortfolioCard.css'

export default function PortfolioCard({ title, description, sourceCode, liveSite, img }) {

    return (

        <div className='Portfolio-card'>
            <div className="card" >
                <img src={img} className="card-img-top" alt={`${title}-img`} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body-links">
                    <a target="_blank" rel="noreferrer" href={liveSite} className="btn btn-secondary">Demo Site</a>
                    <a target="_blank" rel="noreferrer" href={sourceCode} className="btn btn-secondary">{'<'}Source{'>'}</a>
                </div>

            </div>
        </div>
    )
}