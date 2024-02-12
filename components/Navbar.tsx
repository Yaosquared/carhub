import Link from "next/link";
import Image from "next/image";

import { BackgroundToggle, CustomButton } from "@/components";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex gap-3 items-center hover:scale-105 ease-in duration-100">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/favicon-32x32.png"
              alt="Car Hub Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <h2 className="font font-bold text-2xl text-[--dark] dark:text-[--light]">
            CarHub
          </h2>
        </div>

        <div className="flex gap-6">
          <div className="hover:scale-105 ease-in duration-100">
            <BackgroundToggle />
          </div>
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] hover:scale-105 ease-in duration-100 border shadow-md"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
