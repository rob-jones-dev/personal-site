import { Link } from 'react-router';
import htmllogo from './assets/HTML5_logo_and_wordmark.svg';
import csslogo from './assets/CSS3_logo_and_wordmark.svg';
import jslogo from './assets/JavaScript_logo.svg';
import reactlogo from './assets/React-icon.svg';
import nodelogo from './assets/Node.js_logo.svg'

export default function Header() {
    return (
        <>
            <header className="bg-black text-white fancy-gradient flex flex-row items-center justify-between gap-10 flex-wrap p-10">
                <div>
                    <h1 className="text-8xl roboto-main font-bold uppercase">Rob Jones</h1>
                    <h2 className="text-lg">Web Developer</h2>
                </div>
                <div className="skill-carousel h-full flex flex-row flex-wrap justify-center items-center">
                    <img src={htmllogo} />
                    <img src={csslogo} />
                    <img src={jslogo} />
                    <img src={reactlogo} />
                    <img src={nodelogo} />
                </div>
            </header>
            <nav className="bg-sky-600 text-white main-nav">
                <ul className="font-mono flex flex-row justify-center items-center gap-10 py-4 text-lg">
                    <li><Link to='/'>// Home</Link></li>
                    <li><Link to='/about'>// About</Link></li>
                    <li><a href='#'>// Projects</a></li>
                    <li><a href='#'>// Contact</a></li>
                    <li className='icon-link'><a href='https://github.com/rob-jones-dev' target='_blank' rel='noopener noreferrer'>// GitHub</a></li>
                    <li className='icon-link'><a href='https://www.linkedin.com/in/rob-jones-dev/' target='_blank' rel='noopener noreferrer'>// LinkedIn</a></li>
                </ul>
            </nav>
        </>
    )
}