import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

export interface ITool {
  name: string;
  Icon: LucideIcon;
}

const ToolItem = ({ name, Icon }: ITool) => {
  return (
    <>
      <Button className="flex justify-center items-center gap-4 bg-[#F4F4F4] p-2 rounded-sm text-[#797979] cursor-pointer text-lg hover:bg-[#f2f2f2]">
        <p>{name}</p> <Icon />
      </Button>
    </>
  );
};

export default ToolItem;
