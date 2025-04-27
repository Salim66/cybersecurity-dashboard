import StatusCards from './components/StatusCards';
import ThreatTable from './components/ThreatTable';
import RealtimeChart from './components/RealtimeChart';

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Cybersecurity Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatusCards />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThreatTable />
        <RealtimeChart />
      </div>
    </main>
  );
}
