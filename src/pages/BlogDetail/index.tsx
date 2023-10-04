import React from "react";

import BlogSidebarRight from "../../components/BlogSidebarRight";
import { FaRegCalendarAlt, FaComment } from "react-icons/fa";
import jpg1 from "../../assets/jpg1.jpg";

const BlogDetail = () => {
  return (
    <div>
      <div>
        <p>Subtitle</p>
        <h1>Amazing Decadent Pecan PIE Best Cake</h1>
        <div>
          <span>
            <FaRegCalendarAlt /> March 22, 2021
          </span>
          <span>
            <FaComment />
            No comment
          </span>
        </div>
        <div>
          <img src={jpg1} alt="" />
        </div>
      </div>
      <BlogSidebarRight />
    </div>
  );
};

export default BlogDetail;
