import { Link } from 'react-router';
import htmllogo from './assets/HTML5.svg';
import csslogo from './assets/CSS3.svg';
import jslogo from './assets/JavaScript.svg';
import reactlogo from './assets/React.svg';
import nodelogo from './assets/Node.js.svg'
import gitlogo from './assets/Git.svg'

export default function Header() {
    return (
        <>
            <header className="text-white fancy-gradient flex flex-row items-center justify-between gap-10 flex-wrap p-10 min-h-143">
                <div>
                    <h1 className="text-8xl roboto-main font-bold uppercase">Rob Jones</h1>
                    <h2 className="text-lg text-right"><i>Web Developer</i></h2>
                </div>
                <div className="skill-carousel h-full flex flex-row flex-wrap justify-center items-center gap-3">
                    <figure>
                        <img src={htmllogo} />
                        <figcaption>HTML 5</figcaption>
                    </figure>
                    <figure>
                        <img src={csslogo} />
                        <figcaption>CSS 3</figcaption>
                    </figure>
                    <figure>
                        <img src={jslogo} />
                        <figcaption>JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img src={reactlogo} />
                        <figcaption>React</figcaption>
                    </figure>
                    <figure>
                        <img src={nodelogo} />
                        <figcaption>Node.js</figcaption>
                    </figure>
                    <figure>
                        <img src={gitlogo} />
                        <figcaption>Git</figcaption>
                    </figure>
                </div>
            </header>
            <nav className="bg-sky-600 text-white main-nav">
                <ul className="font-mono flex flex-row justify-center items-center gap-10 py-4 text-lg">
                    <li><Link to='/'>// Home</Link></li>
                    <li><Link to='/about'>// About</Link></li>
                    <li><Link to='/projects'>// Projects</Link></li>
                    <li><Link to='/contact'>// Contact</Link></li>
                    <li className='icon-link'><a href='https://github.com/rob-jones-dev' target='_blank' rel='noopener noreferrer'>// GitHub</a></li>
                </ul>
            </nav>
        </>
    )
}