import React from 'react';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';

function App() {
    return (
        <>
            <SideBar />
            <div className='flex flex-col md:pl-64'>
                <Details />
            </div>
        </>
    );
}

export default App;
