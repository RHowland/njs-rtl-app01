//Footer
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-black border-t-2 border-l-2 border-green-800">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto ">
        <div className="flex items-center gap-5 justify-between">
          <div className="pt-2">
            <Link href="/">
              <Image src="/SimpleLogo.jpg" alt="logo" width={100} height={50} />
            </Link>
          </div>

          <div className="hidden mt-2 space-x-6 md:flex">
            <Link href="/AboutPage">About Us</Link>
            <Link href="/ServicesPage">Services</Link>
            <Link href="/ContactPage">Contact</Link>
          </div>
          <div className="flex justify-center space-x-4 cursor-pointer">
            <a>
              {/* <img src="/icons8-facebook-48.png" alt="Facebook icon" className="h-8" /> */}
              <Image src="/icons8-facebook-48.png" alt="Facebook icon" width={35} height={40} />
            </a>

            <a>
             
              <Image src="/icons8-instagram-48.png" alt="Instagram icon" width={35} height={40} />
            </a>

            <a>
            
              <Image src="/icons8-linkedin-48.png" alt="LinkedIn icon" width={35} height={40} />
            </a>

            <a>
          
              <Image src="/icons8-youtube-48.png" alt="YouTube icon" width={35} height={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/**
* =====================================================================
*   ORIGINAL DOCUMENTATION 
* =====================================================================
* File Name      : Footer.tsx
* Component Name : Footer
* Component Type : Functional Component
* Date Created   : 9-6-2024
* Dev Name       : Hijab Zulfiqar
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To provide a consistent navigation and social media interface across all pages of the website.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : It renders a footer with links to the main pages, a logo that links to the homepage, and social media icons.
* 
* ------------------------------
* Section Comments: none
* 
* ------------------------------
* Input Comments: none
* 
* ------------------------------
* Output Comments: none
* 
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : No, the implementation follows common React and Next.js patterns.
*
*/
