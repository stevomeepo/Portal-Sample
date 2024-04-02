import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EquipmentHistoryPage() {
  const router = useRouter();
  const { equipmentId } = router.query;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (equipmentId) {
      fetch(`/api/assetHistory/${equipmentId}`)
        .then((res) => res.json())
        .then((data) => {

          setHistory(data);
        })
        .catch((error) => console.error('Failed to fetch history:', error));
    }
  }, [equipmentId]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-xl font-semibold mb-4">Asset History</h2>
      <div className="rounded-lg border text-card-foreground bg-white shadow-md">
        <div className="p-0">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle text-center">User</th>
                  <th className="h-12 px-4 text-left align-middle text-center">Owned From</th>
                  <th className="h-12 px-4 text-left align-middle text-center">Owned Until</th>
                </tr>
              </thead>
              <tbody>
                {history.map((entry) => (
                  <tr key={entry.id} className="border-b">
                    <td className="p-4 align-middle text-center">{entry.user.firstName} {entry.user.lastName}</td>
                    <td className="p-4 align-middle text-center">{new Date(entry.ownedFrom).toLocaleDateString()}</td>
                    <td className="p-4 align-middle text-center">{entry.ownedUntil ? new Date(entry.ownedUntil).toLocaleDateString() : 'Present'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}