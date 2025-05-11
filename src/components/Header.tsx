import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";
import { useMobile } from "@/hooks/useMobile";

const Header = () => {
  const isMobile = useMobile();
  return (
    <header
      className="
        w-full h-20 bg-transparent
        flex justify-center items-center
        border-b-1 border-b-stone-200 p-4"
    >
      <div
        className="flex items-center w-full justify-between
            md:max-w-4xl"
      >
        <a href="/">
          <h1>Ravleen.Ink</h1>
        </a>
        {isMobile ? (
          <nav className="flex text-stone-400 font-light">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img src={logo} alt="Ravleen.Ink" width="32" height="32" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="flex flex-col gap-2 text-center text-stone-400 font-light p-4 transistion-all duration-300"
              >
                <a href="#about">
                  <DropdownMenuItem>about</DropdownMenuItem>
                </a>
                <a href="#projects">
                  <DropdownMenuItem>projects</DropdownMenuItem>
                </a>
                <a href="#contact">
                  <DropdownMenuItem>contact</DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        ) : (
          <>
            <nav className="flex gap-20 text-stone-400 font-light">
              <a href="#about">about</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact</a>
            </nav>
            <img src={logo} alt="Ravleen.Ink" width="32" height="32" />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
