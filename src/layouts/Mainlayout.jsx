import Header from '../components/Header';
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
        </div>
    );
};

export default Mainlayout;