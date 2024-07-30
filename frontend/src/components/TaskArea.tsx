import TaskBoard from "@/components/TaskBoard";
import Header from "@/components/Header";
const TaskArea = () => {
  return (
    <div className="bg-[#F7F7F7] w-full p-5">
      <Header />
      <TaskBoard />
    </div>
  );
};

export default TaskArea;
