import React from "react";
import { Button } from "./ui/button";
import {
  BellDot,
  ChevronsRight,
  Sun,
  CirclePlus,
  SquareKanban,
  House,
  Settings,
  UserRound,
  ChartLine,
  LucideIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SidebarItemProps {
  Icon: LucideIcon;
  label: string;
}

const SidebarItem = ({ Icon, label }: SidebarItemProps) => (
  <li className="flex gap-3 hover:bg-[#F4F4F4] cursor-pointer p-2 rounded-sm border-2 border-transparent hover:border-[#DDDDDD]">
    <Icon /> {label}
  </li>
);

const Sidebar = () => {
  const items = [
    { Icon: House, label: "Home" },
    { Icon: SquareKanban, label: "Boards" },
    { Icon: Settings, label: "Settings" },
    { Icon: UserRound, label: "Teams" },
    { Icon: ChartLine, label: "Analytics" },
  ];

  return (
    <div className="flex flex-col gap-5 p-4 bg-white border border-[#DEDEDE] h-screen min-w-64">
      <div className="flex items-center gap-1">
        <Avatar className="size-8">
          <AvatarImage
            className="shadow-md"
            src="https://github.com/viditagrawal56.png"
          />
          <AvatarFallback>VA</AvatarFallback>
        </Avatar>
        <h2 className="font-semibold">Joe Gardner</h2>
      </div>

      <div className="flex text-[#797979] justify-between items-center">
        <div className="flex gap-4">
          <BellDot className="size-6" />
          <Sun className="size-6" />
          <ChevronsRight className="size-6" />
        </div>
        <Button className="h-8 w-4/12 text-[#797979] bg-[#F4F4F4]">
          Log out
        </Button>
      </div>

      <ul className="space-y-2 text-[#797979] flex flex-col">
        {items.map(({ Icon, label }) => (
          <SidebarItem key={label} Icon={Icon} label={label} />
        ))}
      </ul>

      <Button className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] flex items-center justify-center gap-2">
        Create new task
        <CirclePlus />
      </Button>
    </div>
  );
};

export default Sidebar;
