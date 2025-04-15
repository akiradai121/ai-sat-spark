
export const Leaderboard = () => {
  const topUsers = [
    { id: 1, name: "Alex M.", score: 98 },
    { id: 2, name: "Sarah K.", score: 95 },
    { id: 3, name: "Michael R.", score: 92 },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Top Performers</h3>
      <div className="space-y-3">
        {topUsers.map((user, index) => (
          <div key={user.id} className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">#{index + 1}</span>
              <span>{user.name}</span>
            </div>
            <span className="font-semibold">{user.score}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
