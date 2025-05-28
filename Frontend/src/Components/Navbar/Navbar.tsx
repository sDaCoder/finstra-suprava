import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className="nav">
            <div className="logo">FINSTRA</div>
            <div className="nav-c">
                <ul>
                    <li><a className="underline-animate">About</a></li>
                    <li><a className="underline-animate">Basic</a></li>
                    <li><a className="underline-animate">Demo</a></li>
                    <li><a className="underline-animate">Alert</a></li>
                    <li><a className="underline-animate">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar