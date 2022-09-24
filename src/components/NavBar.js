import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a href="#home" key={links.index}>home</a>}
  {<a href="#about" key={links.index}>about</a>}
  {<a href="#projects" key={links.index}>projects</a>}
  
  </nav>;

}

export default NavBar;
