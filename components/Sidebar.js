import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        document.body.classList.toggle('sidebar-open', sidebarOpen);
    }, [sidebarOpen]);

    const closeSidebar = () => setSidebarOpen(false);

    // Navigate and close sidebar
    const navigateAndCloseSidebar = (path) => {
        router.push(path);
        setSidebarOpen(false);
    };

    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-20 ${sidebarOpen ? '' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
            <div className="flex">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} 
                    className={`hamburger hamburger--spin ${sidebarOpen ? 'is-active' : ''}`} 
                    type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <div className="sidebar">
                    <div className="flex flex-col h-full text-center">
                            <nav className="flex flex-col space-y-4 flex-grow">
                                <Link className="sidebar-link-text" onClick={() => navigateAndCloseSidebar('/dashboard')} href="/dashboard" passHref>
                                    <span>🏠</span>
                                    <span className="sidebar-link-text">Dashboard</span>
                                </Link>
                                <Link className="sidebar-icon" onClick={() => navigateAndCloseSidebar('/assets')} href="/assets" passHref>
                                    <span>💼</span>
                                    <span className="sidebar-link-text">Assets</span>
                                </Link>
                                {/* Additional links */}
                            </nav>
                            {/* Bottom section for sign out or additional actions */}
                            <div className="space-y-4 pb-12">
                                {/* Logout or other actions */}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Sidebar;