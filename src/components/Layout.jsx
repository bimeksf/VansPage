import {Link, Outlet} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default function Layout() {

return (
    <>
    <Header/>
    <div className='h-screen flex flex-col p-4 '>
    <Outlet/>
    
    <Footer/>
    </div>

    </>
)


}