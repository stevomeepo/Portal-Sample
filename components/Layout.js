import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";

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
                        <button onClick={() => signOut()} style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                            Sign Out
                        </button>
                    )}
                </header>
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
                {/* Footer or other elements */}
            </div>
        </div>
    );
};

export default Layout;