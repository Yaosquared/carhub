import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/favicon-32x32.png"
              alt="Car Hub Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-xl font-semibold text-[--dark] dark:text-[--light]">
              CarHub
            </p>
          </div>
          <p className="text-base text-gray-700 dark:text-[--light]">
            Carhub 2024 <br /> All right reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold dark:text-[--light]">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 dark:text-[--light]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 dark:text-[--light]">
        <p>@2024 CarHub. All Rights Reserved.</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 dark:text-[--light]">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 dark:text-[--light]">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
