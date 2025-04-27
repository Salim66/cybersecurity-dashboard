
'use client';

export default function ThreatTable() {
    const threats = [
        { id: 1, name: 'SQL Injection', severity: 'High', status: 'Mitigated' },
        { id: 2, name: 'Cross Site Scripting', severity: 'Medium', status: 'Monitoring' },
        { id: 3, name: 'DDoS Attack', severity: 'Critical', status: 'Blocked' }
    ];

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Threats Table</h2>
            <table className="w-full text-sm">
                <thead>
                    <tr>
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Severity</th>
                        <th className="text-left p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {threats.map((threat) => (
                        <tr key={threat.id}>
                            <td className="p-2">{threat.name}</td>
                            <td className="p-2">{threat.severity}</td>
                            <td className="p-2">{threat.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
