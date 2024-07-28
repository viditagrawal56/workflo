import React from "react";

const TaskBoard = () => {
  const tasks = [
    {
      id: 1,
      title: "Implement User Authentication",
      status: "To do",
      priority: "Urgent",
      date: "2024-08-15",
    },
    {
      id: 2,
      title: "Design Home Page UI",
      status: "In progress",
      priority: "Medium",
      date: "2024-08-15",
    },
    {
      id: 3,
      title: "Conduct User Feedback Survey",
      status: "In progress",
      priority: "Low",
      date: "2024-08-05",
    },
    {
      id: 4,
      title: "Integrate Cloud Storage",
      status: "Under review",
      priority: "Urgent",
      date: "2024-08-20",
    },
    {
      id: 5,
      title: "Test Cross-browser Compatibility",
      status: "Finished",
      priority: "Medium",
      date: "2024-07-30",
    },
  ];

  const statuses = ["To do", "In progress", "Under review", "Finished"];

  return (
    <div className="flex space-x-4">
      {statuses.map((status) => (
        <div key={status} className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{status}</h3>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.status === status)
              .map((task) => (
                <div key={task.id} className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold">{task.title}</h4>
                  <p
                    className={`text-sm ${
                      task.priority === "Urgent"
                        ? "text-red-600"
                        : task.priority === "Medium"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {task.priority}
                  </p>
                  <p className="text-sm">{task.date}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
