import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from '@clerk/nextjs';
import ThemeToggle from "@/components/theme-toggle";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      <ThemeToggle />
    </div>
  );
}

export default Home;