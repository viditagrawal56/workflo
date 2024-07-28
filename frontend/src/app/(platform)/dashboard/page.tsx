import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TaskBoard from "@/components/TaskBoard";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-50">
          <Header />
          <TaskBoard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
