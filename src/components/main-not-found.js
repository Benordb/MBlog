import { MainButton } from "./main-button";
import { MainContainer } from "./main-container";
import Link from "next/link";
export const MainNotFound = () => {
  return (
    <MainContainer>
      <div className="flex flex-col xl:flex-row gap-10 sm:w-[642px] m-auto">
        <h1 className="text-8xl text-black m-auto">404</h1>
        <div className="border"></div>
        <div className="text-center">
          <h2 className="text-black text-2xl">Page Not Found</h2>
          <p className="py-5">
            W&apos;re sorry, This page is unknown or does not exist the page you
            are looking for.
          </p>
          <Link href="/">
            <MainButton btnContent="Back To Home" />
          </Link>
        </div>
      </div>
    </MainContainer>
  );
};
