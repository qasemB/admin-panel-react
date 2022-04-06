import React from "react";
import Navbar from "./navbar/Index";
import Sidebar from "./sidebar/Index";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section id="content_section" class="bg-light py-2 px-3"></section>
    </div>
  );
};

export default Index;
