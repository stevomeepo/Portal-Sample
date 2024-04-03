import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { VscHome, VscPackage, VscCalendar, VscAccount  } from "react-icons/vsc";
import { RxVideo } from "react-icons/rx";
import { PiChartLineUp } from "react-icons/pi";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        document.body.classList.toggle('sidebar-open', sidebarOpen);
    }, [sidebarOpen]);

    // Navigate and close sidebar
    const navigateAndCloseSidebar = (path) => {
        router.push(path);
        setSidebarOpen(false);
    };

    return (
        <>
            <div className={`${sidebarOpen ? '' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <div className="flex">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} 
                    className={`hamburger hamburger--spin ${sidebarOpen ? 'is-active' : ''}`} 
                    type="button"
                    style={{ marginLeft: '5px' }}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="sidebar flex flex-col justify-between">
                    <nav className="flex flex-col space-y-4">
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/dashboard')} href="/dashboard" passHref>
                            <VscHome size="30"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Dashboard</span>
                        </Link>
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/profile')} href="/profile" passHref>
                            <VscAccount size="25"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Profile</span>
                        </Link>
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/assets')} href="/assets" passHref>
                            <VscPackage size="30"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Assets</span>
                        </Link>
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/assets')} href="/assets" passHref>
                            <VscCalendar size="25"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Calendar</span>
                        </Link>
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/dashboard')} href="/assets" passHref>
                            <PiChartLineUp size="30"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Performance</span>
                        </Link>
                        <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/dashboard')} href="/assets" passHref>
                            <RxVideo size="30"/>
                            <span className="sidebar-link-text" style={{ marginLeft: '8px' }}>Training</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;