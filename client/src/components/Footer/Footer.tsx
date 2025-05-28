import React from 'react'

const Footer: React.FC = () => {
    return (
        <>
            <footer id="contact" className="mt-16 border-t pt-10 py-20">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600"> */}
                <div className='flex flex-wrap items-start justify-around gap-8'>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-green-600">About us</a></li>
                            <li><a href="#" className="hover:text-green-600">Our services</a></li>
                            <li><a href="#" className="hover:text-green-600">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-green-600">Affiliate program</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Get Help</h4>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:text-green-600">FAQ</a></li>
                            <li><a href="#" className="hover:text-green-600">Contact us</a></li>
                            <li><a href="#" className="hover:text-green-600">Team</a></li>
                            <li><a href="#" className="hover:text-green-600">Developer</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-xl hover:text-green-600"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer