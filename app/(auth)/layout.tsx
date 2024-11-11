import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-brand p-8 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-8">
          <Image
            src="/lacibox.png"
            alt="logo"
            width={220}
            height={50}
            className="h-[50px] w-[220px]"
            priority
          />
          <div className="space-y-4 text-white">
            <h1 className="h1">Kelola file Anda dengan cara terbaik</h1>
            <p className="body-1">
              Ini adalah tempat di mana Anda dapat menyimpan semua dokumen Anda.
            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={300}
            height={300}
            className="transition-all hover:rotate-2 hover:scale-105"
            priority
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-8 lg:justify-center lg:p-8 lg:py-0">
        <div className="mb-8 lg:hidden">
          <Image
            src="/lacibox.png"
            alt="logo"
            width={220}
            height={80}
            className="h-[50px] w-[220px] lg:w-[250px]"
            priority
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;