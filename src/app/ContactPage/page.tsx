//Component Name: ContactPage
// Footnote 1
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <main>  {/* Footnote 2 */}
      <Navbar />
        <div className="flex flex-col justify-center items-center h-screen  text-gray-800 text-2xl font-sans">
          <h1 className=" font-bold">Contact Page</h1>
        </div>
      <Footer/>  {/* Footnote 3 */}
    </main>
  );
};

export default ContactPage;
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION 
* =====================================================================
* File Name      : Page.tsx
* Component Name : ContactPage
* Component Type : Functional Component
* Date Created   : 10-6-2024
* Dev Name       : Hijab Zulfiqar
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To provide a dedicated page for introducing the organization to visitors.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : It displays an "Contact" page with a styled heading and a link to navigate back to the homepage.
* 
* ----------------___________________
* Answer  : No, the code leverages standard React and Next.js functionalities.
*
* ------------------------------
* Input Comments: none
* 
* ------------------------------
* Output Comments: none
* 
* ------------------------------
* Section Comments: none
* 
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : No, the implementation is straightforward and uses common practices for Next.js applications.
*
*/
/**
* =====================================================================
*   REVISION DOCUMENTATION  (Append AFTER PREVIOUS documentation block(s) )
* =====================================================================
* Date Revised : 2024-06-10   (last date you made a code change)
* Dev Name     : Rich Howland
* ------------------------------
* Question: Why was it necessary to revise this component?
* Answer  : The navbar and the footer were missing from this page
*
* ------------------------------
* Describe Your Change(s): 
* I made these changes: 
* - First commant line
*   - Changed //Contact Page   to   // Component Name: ContactPage
* - changed component name from Page to ContactPage
* - added additional import statements and additional JSX tags
*   in the return code block
* - added <main><Navbar/><Footer</main> tags to the return code block
* - removed the Back to Home link because the Navbar provides that link.
* ------------------------------
* Footnote Comments:   (Enter "none" if you have no Section comments)
* Footnote 1
* Added these two import statements
* import Footer from "@/components/Footer";
* import Navbar from "@/components/Navbar";
* 
* Footnote 2
* Added <main>       to the beginning of the return code block.
*       <navbar />> 
* 
* Footnote 3
* Added <Footer /> to the end of the return code block
*       </main>
* ------------------------------
* Input Comments:     (Enter "none" if you have no Input comments)
* none
* ------------------------------
* Output Comments:    (Enter "none" if you have no Output comments)
* none
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : no
*
*/

