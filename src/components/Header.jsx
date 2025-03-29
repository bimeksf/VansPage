import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <nav className='flex justify-between items-center bg-background lg:h-10 lg:p-8 p-2 '>
                <NavLink to="/" className='homeLink font-bold'>#VANLIFE</NavLink>

                <button 
                    onClick={handleClick}
                    className={`lg:hidden transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'translate-x-[-70px]' : 'translate-x-0'}`}
                >
                    <svg 
                        className="text-black" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="50" 
                        height="50" 
                        viewBox="0 0 50 50"
                    >
                        <path 
                            fill="currentColor" 
                            d="M10 12h30v4H10zm0 10h30v4H10zm0 10h30v4H10z"
                        />
                    </svg>
                </button>

                <div className={`
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-[200px]'} transition-all duration-300 ease-in-out
                    flex flex-col absolute right-0 bottom-0 gap-4 bg-background min-h-screen items-center z-10
                    p-4 my-[-3rem]
                lg:flex lg:flex-row lg:static lg:min-h-0 lg:gap-6 lg:p-0 lg:translate-x-0

        

                `}>
                    <NavLink to="/host" className={({ isActive }) => 
                            `border-b-4 ${isActive ? 'border-customOrange' : 'border-transparent'} hover:border-customOrange`
                        }
                >Host</NavLink>
                    <NavLink to="/about" className={({ isActive }) => 
                            `border-b-4 ${isActive ? 'border-customOrange' : 'border-transparent'} hover:border-customOrange`
                        }>About</NavLink>
                    <NavLink to="/vans" className={({ isActive }) => 
                            `border-b-4 ${isActive ? 'border-customOrange' : 'border-transparent'} hover:border-customOrange`
                        }>Vans</NavLink>
                    <NavLink to="/login" className={({ isActive }) => 
                            `border-b-4 ${isActive ? 'border-customOrange' : 'border-transparent'} hover:border-customOrange`
                        }>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                fill="currentColor" 
                                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-2.5-8.5q1.45 0 2.475-1.025T13 10t-1.025-2.475T9.5 6.5T7.025 7.525T6 10t1.025 2.475T9.5 13.5m7 1q1.05 0 1.775-.725T19 12t-.725-1.775T16.5 9.5t-1.775.725T14 12t.725 1.775t1.775.725M12 20q2.125 0 3.875-1t2.825-2.65q-.525-.15-1.075-.25T16.5 16q-1.325 0-3.2.775t-3 3.05q.425.1.85.138T12 20m-3.175-.65q.875-1.8 1.988-2.675T12.5 15.5q-.725-.225-1.463-.362T9.5 15q-1.125 0-2.225.275t-2.125.775q.65 1.075 1.588 1.938t2.087 1.362"
                            />
                        </svg>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}