import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header
      className="
        w-full h-20 bg-transparent
        flex justify-center items-center
        border-b-1 border-b-stone-200"
    >
      <div className="flex items-center w-full justify-between
            md:max-w-4xl">
        <h1>Ravleen.Ink</h1>
        {window.innerWidth < 768 ? (
          <nav className="flex text-stone-400 font-light">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MenuIcon className="size-6 text-stone-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <a href="#about"><DropdownMenuItem>about</DropdownMenuItem></a>
                <a href="#projects"><DropdownMenuItem>projects</DropdownMenuItem></a>
                <a href="#blog"><DropdownMenuItem>blog</DropdownMenuItem></a>
                <a href="#resume"><DropdownMenuItem>resume</DropdownMenuItem></a>
                <a href="#contact"><DropdownMenuItem>contact</DropdownMenuItem></a>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        ) : (
          <nav className="flex gap-20 text-stone-400 font-light">
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#blog">blog</a>
            <a href="#resume">resume</a>
            <a href="#contact">contact</a>
          </nav>
        )}
        <img src={logo} alt="Ravleen.Ink" width="32" height="32"/>
      </div>
    </header>
  );
};

export default Header;
