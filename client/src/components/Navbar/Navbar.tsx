import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div className="flex justify-between items-center py-6 border-b border-gray-300">
            <div className="text-2xl font-bold text-green-700">FINSTRA</div>
            <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#basic" className="hover:underline">Basic</a></li>
                <li><a href="#demo" className="hover:underline">Demo</a></li>
                <li><a href="#alert" className="hover:underline">Alert</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar