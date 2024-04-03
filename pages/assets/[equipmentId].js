import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function EquipmentHistoryPage() {
  const router = useRouter();
  const { equipmentId } = router.query;
  const [history, setHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

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

  // Calculate the number of pages
  const pageCount = Math.ceil(history.length / itemsPerPage);

  // Slice the history array for the current page
  let startPage = currentPage - 1;
  startPage = Math.max(startPage, 1);
  let endPage = startPage + 2;
  endPage = Math.min(endPage, pageCount);

  // Ensure we always show up to 3 pages, adjust if we're at the lower end of page numbers
  if (currentPage < 3) {
    startPage = 1;
    endPage = Math.min(3, pageCount);
  }

  // Adjust for when we're at the higher end of page numbers
  if (currentPage > pageCount - 2) {
    endPage = pageCount;
    startPage = Math.max(1, pageCount - 2);
  }

  // Slice the history array for the current page
  const currentHistory = history.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to change page
  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-4 mt-10">
        <h2 className="text-xl font-semibold">Asset History</h2>
        <Link href="/assets" passHref>
          <button className="px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-700 transition-colors">
            Return to Assets
          </button>
        </Link>
      </div>
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
                {currentHistory.map((entry) => (
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
      {pageCount > 1 && (
        <div className="flex justify-center mt-4">
          <button onClick={() => setPage(1)} disabled={currentPage === 1} className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-purple-700 hover:text-white">First</button>
          <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-purple-700 hover:text-white">Previous</button>
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(pageNumber => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`mx-1 px-4 py-2 rounded ${currentPage === pageNumber ? 'bg-purple-500 hover:bg-purple-700 text-white' : 'bg-gray-200 hover:bg-purple-700 hover:text-white'}`}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={() => setPage(currentPage + 1)} disabled={currentPage === pageCount} className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-purple-700 hover:text-white">Next</button>
          <button onClick={() => setPage(pageCount)} disabled={currentPage === pageCount} className="mx-1 px-4 py-2 rounded bg-gray-200 hover:bg-purple-700 hover:text-white">Last</button>
        </div>
      )}
    </div>
  );
}