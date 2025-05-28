import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-6 border-b border-gray-300">
            <div className="text-3xl font-bold text-green-700">FINSTRA</div>
            <ul className="flex space-x-6 text-m font-medium ul">
                <li><a href="#about" className="underline-animate py-1">About</a></li>
                <li><a href="#basic" className="underline-animate py-1">Basic</a></li>
                <li><a href="#demo" className="underline-animate py-1 ">Demo</a></li>
                <li><a href="#alert" className="underline-animate py-1">Alert</a></li>
                <li><a href="#contact" className="underline-animate py-1">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar