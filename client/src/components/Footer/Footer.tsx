import Link from 'next/link'
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
                            <li><Link href="#" className="hover:text-green-600">About us</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Our services</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Privacy policy</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Affiliate program</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Get Help</h4>
                        <ul className="space-y-1">
                            <li><Link href="#" className="hover:text-green-600">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Team</Link></li>
                            <li><Link href="#" className="hover:text-green-600">Developer</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-2">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-xl hover:text-green-600"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#" className="text-xl hover:text-green-600"><i className="fab fa-twitter"></i></Link>
                            <Link href="#" className="text-xl hover:text-green-600"><i className="fab fa-instagram"></i></Link>
                            <Link href="#" className="text-xl hover:text-green-600"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer