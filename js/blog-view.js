//Blog view page

const queryParams = new URLSearchParams(window.location.search);
const blogId = queryParams.get("id");

console.log(blogId);
console.log(blogs[blogId]);
const blogTitle = document.querySelector("#blog-page-title");
const blogAuthor = document.querySelector("#blog-page-author");
const blogDesc = document.querySelector("#blog-page-desc");

blogTitle.innerHTML = blogs[blogId].title;
blogAuthor.innerHTML = blogs[blogId].author;
blogDesc.innerHTML = blogs[blogId].description;
