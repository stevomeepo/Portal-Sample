import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    const { data: session } = useSession();
    const router = useRouter();

    const isLoginPage = router.pathname === "/";

    return (
        <>
            {!isLoginPage && <Sidebar />}
            <header>
                {/* Other header content */}
                {session && (
                    <button onClick={() => signOut()} style={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                        Sign Out
                    </button>
                )}
            </header>
            <main>{children}</main>
            {/* Footer or other elements */}
        </>
    );
};

export default Layout;