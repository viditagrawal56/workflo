import { Eye, EyeOff } from "lucide-react";
import { Input, InputProps } from "./ui/input";
import React from "react";
import { cn } from "@/lib/utils";

interface IPasswordInput extends InputProps {}

const PasswordInput = React.forwardRef<HTMLInputElement, IPasswordInput>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Eye className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>
    );
  }
);

export default PasswordInput;
