import { LucideIcon } from "lucide-react";

export interface SidebarItemProps {
  Icon: LucideIcon;
  label: string;
  isActive: boolean;
}

const SidebarItem = ({ Icon, label, isActive }: SidebarItemProps) => (
  <li
    className={`flex gap-3 hover:bg-[#F4F4F4] cursor-pointer p-2 rounded-sm border-2 border-transparent hover:border-[#DDDDDD] ${
      isActive && "bg-[#F4F4F4] border-[#DDDD] border-[1px]"
    }`}
  >
    <Icon /> {label}
  </li>
);

export default SidebarItem;
