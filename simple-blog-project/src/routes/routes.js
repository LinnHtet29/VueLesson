import showBlogs from "../components/ShowBlog";
import addBlog from "../components/AddBlog";
import singleBlog from "../components/SingleBlog";
import editBlog from "../components/EditBlog";

export default [
  { path: "/", component: showBlogs },
  { path: "/add", component: addBlog },
  { path: "/:id", component: singleBlog },
  { path: "/remove/:id", component: showBlogs },
  { path: "/edit/:id", component: editBlog }
];
