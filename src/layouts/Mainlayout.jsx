import Footer from '../components/MainLayout/Footer';
import Header from '../components/MainLayout/Header';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;