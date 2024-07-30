import ToolItem, { ITool } from "./ToolItem";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  CirclePlus,
  Search,
  Calendar,
  Sparkles,
  Filter,
  Share2,
} from "lucide-react";

const ToolBar = () => {
  const items: ITool[] = [
    {
      name: "Calender view",
      Icon: Calendar,
    },
    {
      name: "Automation",
      Icon: Sparkles,
    },
    {
      name: "Filter",
      Icon: Filter,
    },
    {
      name: "Share",
      Icon: Share2,
    },
  ];
  return (
    <div className="flex justify-between">
      <div className="w-fit bg-white border-[1px] rounded-md flex items-center overflow-hidden">
        <Input
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none w-[196px] "
          placeholder="Search"
        />
        <div className="p-2">
          <Search className="stroke-[#797979]" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-5">
          {items.map((item) => {
            return (
              <ToolItem
                key={item.name}
                name={item.name}
                Icon={item.Icon}
              ></ToolItem>
            );
          })}
        </div>
        <div>
          <Button className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] flex items-center justify-center gap-2">
            Create new
            <CirclePlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
