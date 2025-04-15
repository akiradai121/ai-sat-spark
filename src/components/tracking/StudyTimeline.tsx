
import { CheckCircle, Circle } from "lucide-react";

export const StudyTimeline = () => {
  const tasks = [
    { id: 1, title: "Math Practice - Algebra", completed: true, date: "2025-04-15" },
    { id: 2, title: "Reading Comprehension", completed: true, date: "2025-04-16" },
    { id: 3, title: "Writing & Language", completed: false, date: "2025-04-17" },
    { id: 4, title: "Math Practice - Geometry", completed: false, date: "2025-04-18" },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Study Timeline</h3>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3">
            {task.completed ? (
              <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-gray-300 mt-0.5" />
            )}
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">{task.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
