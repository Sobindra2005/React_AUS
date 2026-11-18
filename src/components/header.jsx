export default function Header() {
    return (
        <header className="custom-utility pl-4.5 pr-7 py-0">
            <div className="text-[1.2rem] font-bold tracking-tighter  ">StudyNest</div>

            <nav className="nav" aria-label="Main navigation">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Programs</a>
                <a href="#" className="nav-link">Resources</a>
                <a href="#" className="nav-link">Pricing</a>
            </nav>

            <button className="nav-button">Get started</button>
        </header>
    )
}