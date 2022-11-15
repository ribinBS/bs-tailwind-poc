import React from 'react';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <>
            <SideBar />
            <div className='flex flex-col md:pl-64'>
                <Dashboard />
            </div>
        </>
    );
}

export default App;
