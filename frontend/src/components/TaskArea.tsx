import TaskBoard from "@/components/TaskBoard";
import Header from "@/components/Header";
const TaskArea = () => {
  return (
    <div className="bg-[#F7F7F7] w-full p-5 h-screen flex flex-col gap-5 overflow-hidden">
      <Header />
      <TaskBoard />
    </div>
  );
};

export default TaskArea;
