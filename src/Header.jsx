import { Link } from 'react-router';
import htmllogo from './assets/HTML5_logo_and_wordmark.svg';
import csslogo from './assets/CSS3_logo_and_wordmark.svg';

export default function Header() {
    return (
        <>
            <header className="bg-black text-white fancy-gradient flex flex-row items-center justify-between h-85 p-10">
                <div>
                    <h1 className="text-8xl roboto-main font-bold uppercase">Rob Jones</h1>
                    <h2 className="text-lg">Web Developer</h2>
                </div>
                <div className="skill-carousel h-full flex flex-row items-center">
                    <img src={htmllogo} />
                    <img src={csslogo} />
                </div>
            </header>
            <nav className="bg-sky-600 text-white">
                <ul className="font-mono flex flex-row justify-center gap-10 py-4 text-lg">
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