'use client'
import useLogout from "@/hooks/useLogout";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdMenu } from "react-icons/io";

const Logout = ()=> {
    const {handleLogout} = useLogout()
  return (
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={"text-xl bg-blue-400 w-[100px] hover:bg-blue-400"} variant="outline"><IoMdMenu /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Logout
