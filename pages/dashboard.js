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

    const renderTabContent = () => {
        switch (activeTab) {
            case 'equipment':
                return (
                  <div>
                    <h1>Your Equipment</h1>
                    <ul>
                      {equipmentList.map((item) => (
                        <li key={item.id}>{item.title}: {item.description}</li>
                      ))}
                    </ul>
                  </div>
                );
            case 'training':
                return <div>Training Content</div>;
            case 'documents':
                return <div>Documents Content</div>;
            case 'policy':
                return <div>Policy Content</div>;
            default:
                return <div>Equipment Content</div>;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab('equipment')}>Equipment</button>
                <button onClick={() => setActiveTab('training')}>Training</button>
                <button onClick={() => setActiveTab('documents')}>Documents</button>
                <button onClick={() => setActiveTab('policy')}>Policy</button>
            </nav>
            <main>
                {renderTabContent()}
            </main>
        </div>
    );
};

export default Dashboard;