import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('equipment');
    const [equipmentList, setEquipmentList] = useState([]);
  
    useEffect(() => {
      if (!loading && !session) {
        router.push("/");
      }
      console.log(session);
    }, [session, loading, router]);

    useEffect(() => {
        if (activeTab === 'equipment') {
            const fetchEquipment = async () => {
                const res = await fetch('/api/getEquipment');
                const data = await res.json();
                if (data && Array.isArray(data.equipment)) {
                    setEquipmentList(data.equipment);
                }
            };
            fetchEquipment().catch(console.error);
        }
    }, [activeTab]);

    if (loading || !session) {
        return <div>Loading...</div>;
    }
    const userName = session.user?.firstName || 'User';

    return (
        <div>
            <header className="flex justify-center p-4">
                <h2>{userName}'s Dashboard - Enerlites</h2>
            </header>
            <div>
                <table className="table-auto w-1/3 mx-auto">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 border">Title</th>
                            <th className="px-2 py-1 border">Serial Number</th>
                        </tr>
                    </thead>
                    <tbody>
                    {equipmentList.map((item) => (
                        <tr key={item.id}>
                            <td className="border px-2 py-1 text-center">{item.title}</td>
                            <td className="border px-2 py-1 text-center">{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;