import { MainButton } from "./main-button";
import { MainContainer } from "./main-container";

export const MainNotFound = () => {
  return (
    <MainContainer>
      <div className="flex flex-col xl:flex-row gap-10 sm:w-[642px] m-auto">
        <h1 className="text-8xl text-black m-auto">404</h1>
        <div className="border"></div>
        <div className="space-y-5 text-center">
          <h2 className="text-black text-2xl">Page Not Found</h2>
          <p>
            W&apos;re sorry, This page is unknown or does not exist the page you
            are looking for.
          </p>
          <MainButton btnContent="Back To Home" />
        </div>
      </div>
    </MainContainer>
  );
};
