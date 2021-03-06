import './css/Portfolio.css';
import PortfolioCard from './PortfolioCard';
import PortfolioInfo from './Portfolio.info';
import NavBar from './Navbar';


export default function Portfolio() {

    const { WonTonSoup, ApiTranslator }=PortfolioInfo;

    return (
        <>
            <NavBar />
            <div className='page'>
                <div className='Portfolio'>
                    <div className='Portfolio-container'>
                        <PortfolioCard
                            title={WonTonSoup.title}
                            description={WonTonSoup.description}
                            liveSite={WonTonSoup.liveSite}
                            sourceCode={WonTonSoup.sourceCode}
                            img={WonTonSoup.img} />

                        <PortfolioCard
                            title={ApiTranslator.title}
                            description={ApiTranslator.description}
                            liveSite={ApiTranslator.liveSite}
                            sourceCode={ApiTranslator.sourceCode}
                            img={ApiTranslator.img} />
                        {/* <PortfolioCard
                    className='Portfolio-cards'
                    title='blog-placholder'
                    description='blog-description'
                    liveSite='this link goes to nowhere'
                    sourceCode='same here'
                    img={ApiTranslator.img} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}