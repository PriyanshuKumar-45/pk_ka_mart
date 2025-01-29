import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Payment from '../../assets/images/payment.avif';

export default function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    // New color scheme
    const textColor = mode === 'dark' ? 'text-gray-300' : 'text-gray-800';
    const bgColor = mode === 'dark' ? 'bg-black' : 'bg-white';
    const linkHoverColor = mode === 'dark' ? 'hover:text-yellow-500' : 'hover:text-blue-500';
    const footerBgColor = mode === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
    const titleColor = mode === 'dark' ? 'text-yellow-500' : 'text-blue-500';
    const borderColor = mode === 'dark' ? 'border-gray-700' : 'border-gray-300';

    return (
        <footer className={`${footerBgColor} border-t ${borderColor} py-10`}>
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h2 className={`font-semibold tracking-widest text-lg ${titleColor} mb-3`}>
                            Categories
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/order" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Order</Link>
                            </li>
                            <li>
                                <Link to="/local-for-vocal" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Local For Vocal</Link>
                            </li>
                            <li>
                                <Link to="/cart" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Cart</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h2 className={`font-semibold tracking-widest text-lg ${titleColor} mb-3`}>
                            Customer Service
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/returnpolicy" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Return Policy</Link>
                            </li>
                            <li>
                                <Link to="/about" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h2 className={`font-semibold tracking-widest text-lg ${titleColor} mb-3`}>
                            Services
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacypolicy" className={`transition-colors duration-300 ${textColor} ${linkHoverColor}`}>Privacy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/4 flex flex-col items-center">
                        <img src={Payment} alt="Payment Methods" className="w-32 mb-4" />
                        <Link to="/" className="text-xl font-bold uppercase tracking-wide">
                            Pk-Mart
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${bgColor} ${textColor} py-4`}>
                <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">
                        © 2024 Pk-Mart
                        <a href="https://twitter.com/knyttneve" className={`ml-1 ${linkHoverColor}`} target="_blank" rel="noopener noreferrer">www.pkmart.com</a>
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className={`transition-colors duration-300 ${linkHoverColor}`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a href="#" className={`transition-colors duration-300 ${linkHoverColor}`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a href="#" className={`transition-colors duration-300 ${linkHoverColor}`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a href="#" className={`transition-colors duration-300 ${linkHoverColor}`}>
                            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
