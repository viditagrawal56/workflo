import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CirclePlus,
  X,
  Maximize2,
  Share2,
  Star,
  Loader,
  Gem,
  Calendar,
  Pencil,
  Plus,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface ICreateTaskBar {
  triggerButtonName: string;
}

const CreateTaskBar = ({ triggerButtonName }: ICreateTaskBar) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="w-full bg-gradient-to-b from-[#4C38C2] to-[#2F2188] flex items-center justify-center gap-2">
          {triggerButtonName}
          <CirclePlus />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-5">
        <SheetHeader>
          {/* TOP BAR */}
          <SheetTitle className="flex items-center justify-between">
            <div className="flex gap-2 items-center justify-center">
              <SheetClose className="cursor-pointer text-[#797979]" asChild>
                <X />
              </SheetClose>
              <Button variant="ghost" className="text-[#797979]">
                <Maximize2 />
              </Button>
            </div>
            <div className="flex gap-4">
              <Button className="text-[#797979] bg-[#F9F9F9] flex gap-1">
                Share
                <Share2 size={18} />
              </Button>
              <Button className="text-[#797979] bg-[#F9F9F9] flex gap-1">
                Favorite
                <Star size={18} />
              </Button>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col gap-4">
          <Input
            placeholder="Title"
            className="w-full text-4xl rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 outline-none placeholder:text-black/30 font-semibold h-14 shadow-none border-none pl-0"
          />
          {/* PROPERTIES */}
          <div className="flex flex-col gap-3">
            {/* Status */}
            <div className="flex">
              <div className="flex items-center gap-5 text-[#666666] w-52">
                <Loader />
                <p>Status</p>
              </div>
              <Select>
                <SelectTrigger className="w-full border-none shadow-none focus:ring-0 text-[#C1BDBD]">
                  <SelectValue placeholder="Not selected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To-Do</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Priority */}
            <div className="flex">
              <div className="flex items-center gap-5 text-[#666666] w-52">
                <Gem />
                <p className="text-sm">Priority</p>
              </div>
              <Select>
                <SelectTrigger className="w-full border-none shadow-none focus:ring-0 text-[#C1BDBD]">
                  <SelectValue placeholder="Not selected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Deadline */}
            <div className="flex">
              <div className="flex items-center gap-5 text-[#666666] w-52">
                <Calendar />
                <p className="text-sm">Deadline</p>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className=" justify-start w-full border-none shadow-none focus:ring-0 text-[#C1BDBD]"
                  >
                    <span>Not selected</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>
            {/* Description */}
            <div className="flex">
              <div className="flex items-center gap-5 text-[#666666] w-52">
                <Pencil />
                <p className="text-sm">Description</p>
              </div>
              <Input
                className="w-full border-none shadow-none focus-visible:ring-0 placeholder:text-[#C1BDBD]"
                placeholder="Not selected"
              />
            </div>
          </div>
          {/* ADD PROPERTY */}
          <div className="flex justify-start items-center gap-5 cursor-pointer mt-5">
            <Plus />
            <Button
              variant="link"
              className="w-fit h-fit p-0 rounded-none hover:no-underline"
            >
              Add custom property
            </Button>
          </div>
          <Separator className="my-5" />
          {/* FOOTER */}
          <p className="text-[#C1BDBD]">
            Start writing, or drag your own files here.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTaskBar;
