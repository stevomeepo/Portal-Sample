import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";
import Link from 'next/link';
import { PiSignOutBold } from 'react-icons/pi';

const Layout = ({ children }) => {
    const { data: session } = useSession();
    const router = useRouter();

    // Determine if the current page is the login page
    const isLoginPage = router.pathname === "/";

    return (
        <div className={`flex h-screen overflow-hidden ${!isLoginPage ? 'with-sidebar' : ''}`}>
            {!isLoginPage && <Sidebar />}
            <div className={`flex-1 flex flex-col ${!isLoginPage ? 'with-sidebar' : ''}`}>
                <header>
                    {/* Header content */}
                    {session && (
                        <div className="logout-container">
                            <button onClick={() => signOut()} className="logout-button">
                                <div className="logout-icon">
                                    <PiSignOutBold size="18px" />
                                </div>
                                <div className="logout-text" style={{ marginLeft: '10px' }}>Sign Out</div>
                            </button>
                        </div>
                    )}
                </header>
                <main className="flex-1 overflow-y-auto">
                    <div className="min-h-screen bg-gray-100">
                        {/* {!isLoginPage && (
                            <Link href="/dashboard">
                                <img src="/enerlites.jpg" alt="Logo" className="mx-auto pt-4 cursor-pointer" style={{ width: '100px', height: 'auto' }} />
                            </Link>
                        )} */}
                        {children}
                    </div>
                </main>
                {/* Footer or other elements */}
            </div>
        </div>
    );
};

export default Layout;