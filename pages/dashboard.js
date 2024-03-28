import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();
  
    useEffect(() => {
      if (!loading && !session) {
        router.push("/");
      }
    }, [session, loading, router]);

    if (loading || !session) {
        return <div>Loading...</div>;
    }
    const userName = session.user?.firstName || 'User';

    return (
        <div>
            <header className="flex justify-center p-4">
                <h2>{userName}'s Dashboard - Enerlites</h2>
            </header>
            {/* Other dashboard content */}
        </div>
    );
};

export default Dashboard;