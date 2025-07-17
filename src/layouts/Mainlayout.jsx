import Footer from '../components/MainLayout/Footer';
import Header from '../components/MainLayout/Header';
import { Outlet } from 'react-router';

const Mainlayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main >
                <Outlet></Outlet>
            </main>
            <footer className='mt-20'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Mainlayout;