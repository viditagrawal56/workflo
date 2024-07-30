import { AlignLeft, Clock4, Plus } from "lucide-react";
import { Button } from "./ui/button";

const TaskBoard = () => {
  const tasks = [
    {
      id: 1,
      title: "Implement User Authentication",
      description:
        "Develop and integrate user authentication using email and password.",
      status: "To do",
      priority: "Urgent",
      date: "2024-08-15",
      time: "1 hr ago",
    },
    {
      id: 2,
      title: "Design Home Page UI",
      description:
        "Develop and integrate user authentication using email and password.",
      status: "In progress",
      priority: "Medium",
      date: "2024-08-15",
      time: "1 hr ago",
    },
    {
      id: 3,
      title: "Conduct User Feedback Survey",
      description: "Collect and analyze user feedback to improve app features.",
      status: "In progress",
      priority: "Low",
      date: "2024-08-05",
      time: "1 hr ago",
    },
    {
      id: 4,
      title: "Integrate Cloud Storage",
      description: "Enable cloud storage for note backup and synchronization.",
      status: "Under review",
      priority: "Urgent",
      date: "2024-08-20",
      time: "1 hr ago",
    },
    {
      id: 5,
      title: "Test Cross-browser Compatibility",
      description:
        "Ensure the app works seamlessly across different web browsers.",
      status: "Finished",
      priority: "Medium",
      date: "2024-07-30",
      time: "1 hr ago",
    },
  ];

  const columns = ["To do", "In progress", "Under review", "Finished"];

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-around p-4 gap-4">
        {columns.map((status, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between text-xl">
              {`${status}`}
              <AlignLeft />
            </div>
            <div className="flex flex-col gap-3 mt-3">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-[#F9F9F9] w-full border-2 p-3 rounded-md flex gap-2 flex-col"
                  >
                    <h4 className="font-bold text-[#606060]">{task.title}</h4>
                    <p className="text-[#797979]">{task.description}</p>
                    <p
                      className={`text-sm text-white px-2 py-1.5 rounded-lg w-fit ${
                        task.priority === "Urgent"
                          ? "bg-[#FF6B6B]"
                          : task.priority === "Medium"
                          ? "bg-[#FFA235]"
                          : "bg-[#0ECC5A]"
                      }`}
                    >
                      {task.priority}
                    </p>
                    <p className="text-sm font-bold text-[#606060] flex gap-2 items-center">
                      <Clock4 />
                      {task.date}
                    </p>
                    <p className="text-[#797979] text-sm">{task.time}</p>
                  </div>
                ))}
            </div>
            <div className="">
              <Button className="bg-gradient-to-b from-[#3A3A3A] to-[#202020] w-full flex justify-between items-center px-3">
                Add new <Plus />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
