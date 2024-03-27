import './Navigation.css';

function Navigation() {
    return (
        < div className="Navigation">
            <div className="Navigation-Container">
                <div className="logo">NEERAJ GUPTA</div>
                <div className="spacer"></div>
                <div className="nav-item"><a href='#'>Resumè</a></div>
                <div className="nav-item"><a href='#'>Projects</a></div>
                <div className="nav-item"><a href='#'>About</a></div>
            </div>
        </div >
    );
}

export default Navigation;