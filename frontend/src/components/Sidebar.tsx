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
  ArrowDownToLine,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SidebarItem, { SidebarItemProps } from "./SidebarItems";

const Sidebar = () => {
  const items: SidebarItemProps[] = [
    { Icon: House, label: "Home", isActive: true },
    { Icon: SquareKanban, label: "Boards", isActive: false },
    { Icon: Settings, label: "Settings", isActive: false },
    { Icon: UserRound, label: "Teams", isActive: false },
    { Icon: ChartLine, label: "Analytics", isActive: false },
  ];

  return (
    <div className="flex flex-col p-4 bg-white border border-[#DEDEDE] h-screen min-w-64 justify-between">
      <div className="flex flex-col gap-5">
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

        <ul className="text-[#797979] flex flex-col">
          {items.map(({ Icon, label, isActive }) => (
            <SidebarItem
              key={label}
              Icon={Icon}
              label={label}
              isActive={isActive}
            />
          ))}
        </ul>

        <Button className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] flex items-center justify-center gap-2">
          Create new task
          <CirclePlus />
        </Button>
      </div>
      <div className=" p-2 bg-[#F4F4F4] text-[#797979] rounded-md flex gap-2 cursor-pointer">
        <div className="flex justify-center items-center">
          <ArrowDownToLine />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium">Download the app</h2>
          <p className="text-xs text-[#797979]">Get the full experience </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
