import Sidebar from "@/components/Sidebar";
import TaskArea from "@/components/TaskArea";

const Dashboard = () => {
  return (
    <div>
      <div className="flex h-screen w-full">
        <Sidebar />
        <TaskArea />
      </div>
    </div>
  );
};

export default Dashboard;
