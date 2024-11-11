import React from "react";
import Image from "next/image";

import { signOutUser } from "@/lib/actions/user.actions";

import Search from "./Search";
import { Button } from "./ui/button";
import FileUploader from "./FileUploader";

const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form
          action={async () => {
            "use server";

            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="w-6 rotate-180"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
