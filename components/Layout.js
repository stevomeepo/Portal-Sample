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
        <div className={isLoginPage ? '' : 'main-content'}>
            {!isLoginPage && <Sidebar />}
            <div className={`flex-1 flex flex-col ${!isLoginPage ? 'with-sidebar' : ''}`}>
                <header>
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
                        {children}
                    </div>
                </main>
                {/* Footer or other elements */}
            </div>
        </div>
    );
};

export default Layout;