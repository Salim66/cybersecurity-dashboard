'use client';

export default function StatusCards() {
    const statuses = [
        { title: 'Active Threats', value: 24 },
        { title: 'Blocked Attacks', value: 132 },
        { title: 'Vulnerabilities Found', value: 8 }
    ];

    return (
        <>
            {statuses.map((status, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">
                    <h2 className="text-lg font-semibold">{status.title}</h2>
                    <p className="text-2xl font-bold">{status.value}</p>
                </div>
            ))}
        </>
    );
}
