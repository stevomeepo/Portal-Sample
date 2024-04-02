import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const { data: session, status } = useSession();
    console.log("Session:", session);
    const loading = status === "loading";
    const router = useRouter();
  
    useEffect(() => {
      if (!loading && !session) {
        router.push("/");
      }
    }, [session, loading, router]);

    if (loading || !session) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }
    const userName = session.user?.firstName || 'User';

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="flex justify-center">
                <h2>{userName}'s Dashboard - Enerlites</h2>
            </header>
            {/* Other dashboard content */}
        </div>
    );
};

export default Dashboard;