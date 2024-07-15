import { MainContainer } from "./main-container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const MainFooter = () => {
  return (
    <MainContainer background="bg-gray-100">
      <div className="pt-12 px-4 space-y-6">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="font-bold text-black">About</h1>
            <p className="mt-3 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              animi optio in aut ea voluptates odio voluptate repellat, magni
              distinctio doloremque possimus debitis modi nulla error, ullam
              atque deleniti ipsam.
            </p>
            <p className="text-black">
              Email : <a className="text-gray-500">info@jstemplate.net</a>
            </p>
            <p className="text-black">
              Phone : <a className="text-gray-500">880 123 456 789</a>
            </p>
          </div>
          <div className="flex-1 flex lg:justify-center">
            <ul className="flex flex-row lg:flex-col lg:gap-2 gap-6 my-5 lg:my-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex gap-6">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center py-8 space-y-12 lg:space-y-0 border-t border-gray-300">
          <div className="flex space-x-2">
            <Image
              src="/MetaBlogLogo.png"
              width={48}
              height={48}
              alt="Picture of the author"
            />
            <div>
              <h1 className="flex text-xl text-black">
                Meta<p className="font-bold">Blog</p>
              </h1>
              <p>© All Rights Reserved.</p>
            </div>
          </div>
          <ul className="flex flex-col lg:flex-row lg:gap-4 lg:items-center">
            <li>Terms of Use</li>
            <li className="border-l border-gray-200 h-4"></li>
            <li>Privacy Policy</li>
            <li className="border-l border-gray-200 h-4"></li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};
