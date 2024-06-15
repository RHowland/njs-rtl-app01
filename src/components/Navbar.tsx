// Navbar
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="container sticky mx-auto p-6">
      <div className="flex items-center gap-8 ">
        <div className="pt-2 cursor-pointer">
          <Link href="/">
            <Image src="/SimpleLogo.jpg" alt="logo" width={100} height={50} />
          </Link>
        </div>

        <div className="hidden mt-2 space-x-6 md:flex">
          <Link href="/AboutPage">About Us</Link>
          <Link href="/ServicesPage">Services</Link>
          <Link href="/ContactPage">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/**
* =====================================================================
*   ORIGINAL DOCUMENTATION 
* =====================================================================
* File Name      : Navbar.tsx
* Component Name : Navbar
* Component Type : Navbar
* Date Created   : 9-6-2024
* Dev Name       : Hijab Zulfiqar
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To provide a consistent navigation interface across the website.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : It renders a navigation bar that includes links to the main pages of the website.
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
* Answer  : No, the code follows standard React and Next.js practices.
*
*/
