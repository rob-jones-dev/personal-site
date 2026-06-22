export default function Header() {
    return (
        <>
            <header className="bg-black text-white fancy-gradient flex flex-col items-left justify-center h-85 pl-10">
                <h1 className="text-8xl roboto-main font-bold uppercase">Rob Jones</h1>
                <h2 className="text-lg">Web Developer</h2>
            </header>
            <nav className="bg-sky-600 text-white">
                <ul className="font-mono flex flex-row justify-center gap-10 py-4 text-lg">
                    <li><a href='#'>// Home</a></li>
                    <li><a href='#'>// About</a></li>
                    <li><a href='#'>// Projects</a></li>
                    <li><a href='#'>// Contact</a></li>
                </ul>
            </nav>
        </>
    )
}