import { CircleHelp } from "lucide-react";
import ToolBar from "./ToolBar";
import HeaderCard, { IHeaderCards } from "./HeaderCard";
import { AccessCardIcon, IntroCardIcon, ShareCardIcon } from "./icons";

const Header = () => {
  const items: IHeaderCards[] = [
    {
      title: "Introducing tags",
      description:
        "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.",
      icon: IntroCardIcon,
    },
    {
      title: "Share Notes Instantly",
      description:
        "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.",
      icon: ShareCardIcon,
    },
    {
      title: "Access Anywhere",
      description:
        "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
      icon: AccessCardIcon,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Good morning, Joe!</h1>
        <div className="flex font-medium justify-center items-center gap-2">
          Help & feedback <CircleHelp />
        </div>
      </div>
      <div className="flex gap-3">
        {items.map((item) => {
          return (
            <HeaderCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
      <ToolBar />
    </div>
  );
};

export default Header;
