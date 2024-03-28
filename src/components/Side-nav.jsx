import React, { useState, useEffect } from 'react';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Home')
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        setIsOpen(!mediaQuery.matches); // Set isOpen to false on mobile
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            {isOpen &&
                <div
                    className={`bg-gray-800 text-white w-64 h-screen flex flex-col transition-transform duration-300 ease-in-out transform ${isOpen ? '' : '-translate-x-full'
                        }`}
                >
                    <div className="p-4">Logo</div>
                    <div className="flex-1 overflow-y-auto">
                        <ul className="space-y-2">
                            <li className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${activeItem === 'Home' ? 'text-green-500' : ''
                                }`} onClick={() => setActiveItem('Home')}>Home</li>
                            <li className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${activeItem === 'Organization' ? 'text-green-500' : ''
                                }`} onClick={() => setActiveItem('Organization')}>Organization</li>
                            <li className={`px-4 py-2 hover:bg-gray-700 cursor-pointer ${activeItem === 'Assets' ? 'text-green-500' : ''
                                }`} onClick={() => setActiveItem('Assets')}>Assets</li>
                        </ul>
                    </div>
                    <button className="absolute top-4 right-4 focus:outline-none block md:hidden" onClick={toggleMenu}>
                        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            }
            {!isOpen &&
                <button className="absolute top-4 left-4 focus:outline-none bg-gray-800 rounded-md block md:hidden" onClick={toggleMenu}>

                    <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            }
        </div>
    );
};

export default SideNav;
